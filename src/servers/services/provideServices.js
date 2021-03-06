import csvjson from 'csvjson';
import CreateServer from '../CreateServer';
import ServersDropdown from '../ServersDropdown';
import DeleteServerModal from '../DeleteServerModal';
import DeleteServerButton from '../DeleteServerButton';
import { EditServer } from '../EditServer';
import ImportServersBtn from '../helpers/ImportServersBtn';
import { resetSelectedServer, selectServer } from '../reducers/selectedServer';
import { createServer, createServers, deleteServer, editServer } from '../reducers/servers';
import { fetchServers } from '../reducers/remoteServers';
import ForServerVersion from '../helpers/ForServerVersion';
import { ServerError } from '../helpers/ServerError';
import ServersImporter from './ServersImporter';
import ServersExporter from './ServersExporter';

const provideServices = (bottle, connect, withRouter) => {
  // Components
  bottle.serviceFactory('CreateServer', CreateServer, 'ImportServersBtn', 'useStateFlagTimeout');
  bottle.decorator('CreateServer', connect([ 'selectedServer' ], [ 'createServer', 'resetSelectedServer' ]));

  bottle.serviceFactory('EditServer', EditServer, 'ServerError');
  bottle.decorator('EditServer', connect([ 'selectedServer' ], [ 'editServer', 'selectServer' ]));

  bottle.serviceFactory('ServersDropdown', ServersDropdown, 'ServersExporter');
  bottle.decorator('ServersDropdown', connect([ 'servers', 'selectedServer' ]));

  bottle.serviceFactory('DeleteServerModal', () => DeleteServerModal);
  bottle.decorator('DeleteServerModal', withRouter);
  bottle.decorator('DeleteServerModal', connect(null, [ 'deleteServer' ]));

  bottle.serviceFactory('DeleteServerButton', DeleteServerButton, 'DeleteServerModal');

  bottle.serviceFactory('ImportServersBtn', ImportServersBtn, 'ServersImporter');
  bottle.decorator('ImportServersBtn', connect(null, [ 'createServers' ]));

  bottle.serviceFactory('ForServerVersion', () => ForServerVersion);
  bottle.decorator('ForServerVersion', connect([ 'selectedServer' ]));

  bottle.serviceFactory('ServerError', ServerError, 'DeleteServerButton');
  bottle.decorator('ServerError', connect([ 'servers', 'selectedServer' ]));

  // Services
  bottle.constant('csvjson', csvjson);
  bottle.service('ServersImporter', ServersImporter, 'csvjson');
  bottle.service('ServersExporter', ServersExporter, 'Storage', 'window', 'csvjson');

  // Actions
  bottle.serviceFactory('selectServer', selectServer, 'buildShlinkApiClient', 'loadMercureInfo');
  bottle.serviceFactory('createServer', () => createServer);
  bottle.serviceFactory('createServers', () => createServers);
  bottle.serviceFactory('deleteServer', () => deleteServer);
  bottle.serviceFactory('editServer', () => editServer);
  bottle.serviceFactory('fetchServers', fetchServers, 'axios');

  bottle.serviceFactory('resetSelectedServer', () => resetSelectedServer);
};

export default provideServices;
