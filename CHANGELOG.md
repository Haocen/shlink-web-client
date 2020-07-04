# CHANGELOG

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/), and this project adheres to [Semantic Versioning](https://semver.org).

## 2.5.1 - 2020-06-06

#### Added

* *Nothing*

#### Changed

* [#254](https://github.com/shlinkio/shlink-web-client/issues/254) Reduced duplication on code to handle mercure topics binding.

#### Deprecated

* *Nothing*

#### Removed

* *Nothing*

#### Fixed

* [#276](https://github.com/shlinkio/shlink-web-client/issues/276) Fixed default grouping used for visits line chart, making it be dynamic depending on how old the short URL is.
* [#280](https://github.com/shlinkio/shlink-web-client/issues/280) Fixed shlink-web-client version not being properly passed when building stable tags of the docker image.
* [#269](https://github.com/shlinkio/shlink-web-client/issues/269) Fixed doughnut chart legends getting to big and hiding charts on mobile devices.


## 2.5.0 - 2020-05-31

#### Added

* [#148](https://github.com/shlinkio/shlink-web-client/issues/148) Added support for real-time updates when consuming a Shlink version that is integrated with a mercure hub server.

    The integration is transparent. When a server is opened, shlink-web-client will try to get the mercure info from it.

    * If it works, it will setup the necessary `EventSource`s, dispatching redux actions when an event is pushed, which will in turn update the UI.
    * If it fails, it will assume it is either not configured or not supported by the Shlink version.

* [#265](https://github.com/shlinkio/shlink-web-client/issues/265) Updated tags section to allow displaying number of short URLs using every tag and number of visits for all short URLs using the tag.

    This will work only when using Shlink v2.2.0 or above. For previous versions, the tags page will continue behaving the same.

* [#261](https://github.com/shlinkio/shlink-web-client/issues/261) Added new page to show visit stats by tag.

    This new page will return a "not found" error when the server is lower than v2.2.0, as older versions do not support fetching stats by tag.

* [#253](https://github.com/shlinkio/shlink-web-client/issues/253) Created new settings page that will be used to define customizations in the app.

* [#149](https://github.com/shlinkio/shlink-web-client/issues/149) and [#198](https://github.com/shlinkio/shlink-web-client/issues/198) Added new line chart to visits and tags stats which displays amount of visits during selected time period, grouped by month, week, day or hour.

#### Changed

* [#218](https://github.com/shlinkio/shlink-web-client/issues/218) Added back button to sections not displayed in left menu.
* [#255](https://github.com/shlinkio/shlink-web-client/issues/255) Improved how servers and settings are persisted in the local storage.

#### Deprecated

* *Nothing*

#### Removed

* *Nothing*

#### Fixed

* [#262](https://github.com/shlinkio/shlink-web-client/issues/262) Fixed charts displaying decimal numbers, when visits are absolute and that makes no sense.


## 2.4.0 - 2020-04-10

#### Added

* [#199](https://github.com/shlinkio/shlink-web-client/issues/199) Added table to visits page which displays the information in a paginated, sortable and filterable list.

    It also supports selecting multiple visits in the table which makes the corresponding data to be highlighted in the visits charts.

* [#241](https://github.com/shlinkio/shlink-web-client/issues/241) Added support to select charts bars in order to highlight related stats in other charts.

    It also selects the visits in the new table, and you can even combine a selection in the chart and in the table.

* [#213](https://github.com/shlinkio/shlink-web-client/issues/213) The versions of both shlink-web-client and currently consumed Shlink server are now displayed in the footer.
* [#221](https://github.com/shlinkio/shlink-web-client/issues/221) Improved how servers are handled, displaying meaningful errors when a not-found or a not-reachable server is tried to be loaded.
* [#226](https://github.com/shlinkio/shlink-web-client/issues/226) Created servers can now be edited.
* [#234](https://github.com/shlinkio/shlink-web-client/issues/234) Allowed short code length to be edited on any new short URL when using Shlink 2.1 or higher.
* [#235](https://github.com/shlinkio/shlink-web-client/issues/235) Allowed editing the long URL for any existing short URL when suing Shlink 2.1 or higher.

#### Changed

* [#205](https://github.com/shlinkio/shlink-web-client/issues/205) Replaced `jest-each` package by jet's native `test.each` function.
* [#209](https://github.com/shlinkio/shlink-web-client/issues/209) Replaced `Unknown` by `Direct` for visits from undetermined referrers.
* [#212](https://github.com/shlinkio/shlink-web-client/issues/212) Moved copy-to-clipboard next to short URL.
* [#208](https://github.com/shlinkio/shlink-web-client/issues/208) Short URLs list paginator is now progressive.

#### Deprecated

* *Nothing*

#### Removed

* *Nothing*

#### Fixed

* [#243](https://github.com/shlinkio/shlink-web-client/issues/243) Fixed loading state and resetting on short URL creation form.
* [#239](https://github.com/shlinkio/shlink-web-client/issues/239) Fixed how user agents are parsed, reducing false results.


## 2.3.1 - 2020-02-08

#### Added

* *Nothing*

#### Changed

* [#191](https://github.com/shlinkio/shlink-web-client/issues/191) Created `ForServerVersion` helper component which dynamically renders children if current server conditions are met.
* [#189](https://github.com/shlinkio/shlink-web-client/issues/189) Simplified short url tags and short url deletion components and reducers, by removing redundant actions.

#### Deprecated

* *Nothing*

#### Removed

* *Nothing*

#### Fixed

* [#193](https://github.com/shlinkio/shlink-web-client/issues/193) Fixed `maxVisits` being set to 0 when trying to reset it from having a value to `null`.
* [#196](https://github.com/shlinkio/shlink-web-client/issues/196) Included apache `.htaccess` file which takes care of falling back to index.html when reloading the page on a client-side handled route.
* [#179](https://github.com/shlinkio/shlink-web-client/issues/179) Ensured domain is provided to Shlink server when editing, deleting or fetching short URLs which do not belong to default domain.
* [#202](https://github.com/shlinkio/shlink-web-client/issues/202) Fixed domain not passed when dispatching actions that affect a single short URL (edit tags, edit meta and delete), which cased the list not to be properly updated.


## 2.3.0 - 2020-01-19

#### Added

* [#174](https://github.com/shlinkio/shlink-web-client/issues/174) Added complete support for Shlink v2.x together with currently supported Shlink versions.
* [#164](https://github.com/shlinkio/shlink-web-client/issues/164) Added max visits control on those URLs which have `maxVisits`.
* [#178](https://github.com/shlinkio/shlink-web-client/issues/178) Short URLs list can now be filtered by date range.
* [#46](https://github.com/shlinkio/shlink-web-client/issues/46) Allowed short URL's metadata to be edited (`maxVisits`, `validSince` and `validUntil`).

#### Changed

* *Nothing*

#### Deprecated

* *Nothing*

#### Removed

* *Nothing*

#### Fixed

* [#170](https://github.com/shlinkio/shlink-web-client/issues/170) Fixed apple icon referencing to incorrect file names.


## 2.2.2 - 2019-10-21

#### Added

* *Nothing*

#### Changed

* *Nothing*

#### Deprecated

* *Nothing*

#### Removed

* *Nothing*

#### Fixed

* [#167](https://github.com/shlinkio/shlink-web-client/issues/167) Fixed `/servers.json` path not being ignored when returning something other than an array.


## 2.2.1 - 2019-10-18

#### Added

* *Nothing*

#### Changed

* *Nothing*

#### Deprecated

* *Nothing*

#### Removed

* *Nothing*

#### Fixed

* [#165](https://github.com/shlinkio/shlink-web-client/issues/165) Fixed error thrown when opening "create" page while using a Shlink version which does not return a valid SemVer version (like `latest` docker image, or any development instance).


## 2.2.0 - 2019-10-05

#### Added

* [#144](https://github.com/shlinkio/shlink-web-client/issues/144) Added domain input to create domain page.

#### Changed

* [#140](https://github.com/shlinkio/shlink-web-client/issues/140) Updated project dependencies.

#### Deprecated

* *Nothing*

#### Removed

* *Nothing*

#### Fixed

* *Nothing*


## 2.1.1 - 2019-09-22

#### Added

* *Nothing*

#### Changed

* [#142](https://github.com/shlinkio/shlink-web-client/issues/142) Updated to newer versions of base docker images for dev and production.

#### Deprecated

* *Nothing*

#### Removed

* *Nothing*

#### Fixed

* [#151](https://github.com/shlinkio/shlink-web-client/issues/151) Fixed "order by" indicator (caret) still indicate ASC on column header when no order is specified.
* [#157](https://github.com/shlinkio/shlink-web-client/issues/157) Fixed pagination control on graphs expanding too much when lots of pages need to be rendered.
* [#155](https://github.com/shlinkio/shlink-web-client/issues/155) Fixed client-side paths resolve to 404 when served from nginx in docker image instead of falling back to `index.html`.


## 2.1.0 - 2019-05-19

#### Added

* [#101](https://github.com/shlinkio/shlink-web-client/issues/101) Added checkbox to short URL creation form that allows to determine the value of the `findIfExists` flag introduced in Shlink v1.16.0.
* [#105](https://github.com/shlinkio/shlink-web-client/issues/105) Added support to pre-configure servers. See [how to pre-configure servers](README.md#pre-configuring-servers) to get more details on how to do it.

#### Changed

* [#125](https://github.com/shlinkio/shlink-web-client/issues/125) Refactored reducers to replace `switch` statements by `handleActions` from [redux-actions](https://github.com/redux-utilities/redux-actions).
* [#116](https://github.com/shlinkio/shlink-web-client/issues/116) Removed sinon in favor of jest mocks.
* [#72](https://github.com/shlinkio/shlink-web-client/issues/72) Increased code coverage up to 80%.

#### Deprecated

* *Nothing*

#### Removed

* *Nothing*

#### Fixed

* *Nothing*


## 2.0.3 - 2019-03-16

#### Added

* *Nothing*

#### Changed

* *Nothing*

#### Deprecated

* *Nothing*

#### Removed

* *Nothing*

#### Fixed

* [#120](https://github.com/shlinkio/shlink-web-client/issues/120) Fixed crash when visits page is loaded and there are no visits with known cities.
* [#113](https://github.com/shlinkio/shlink-web-client/issues/113) Ensured visits loading is cancelled when the visits page is unmounted. Requests on flight will still finish.
* [#118](https://github.com/shlinkio/shlink-web-client/issues/118) Fixed chart crashing when trying to render lots of bars by adding pagination.


## 2.0.2 - 2019-03-04

#### Added

* *Nothing*

#### Changed

* *Nothing*

#### Deprecated

* *Nothing*

#### Removed

* *Nothing*

#### Fixed

* [#103](https://github.com/shlinkio/shlink-web-client/issues/103) Fixed visits page getting freezed when loading large amounts of visits.
* [#111](https://github.com/shlinkio/shlink-web-client/issues/111) Fixed crash when trying to load a map modal with only one location.
* [#115](https://github.com/shlinkio/shlink-web-client/issues/115) Created `ErrorHandler` component which will prevent crashes in app to make it unusable.


## 2.0.1 - 2019-03-03

#### Added

* *Nothing*

#### Changed

* [#106](https://github.com/shlinkio/shlink-web-client/issues/106) Reduced size of docker image by using a multi-stage build Dockerfile.
* [#95](https://github.com/shlinkio/shlink-web-client/issues/95) Tested docker image build during travis executions.

#### Deprecated

* *Nothing*

#### Removed

* *Nothing*

#### Fixed

* [#104](https://github.com/shlinkio/shlink-web-client/issues/104) Fixed blank page being showed when not-found paths are loaded.
* [#94](https://github.com/shlinkio/shlink-web-client/issues/94) Fixed initial zoom and center on maps.
* [#93](https://github.com/shlinkio/shlink-web-client/issues/93) Prevented side menu to be swipeable while a modal window is displayed.


## 2.0.0 - 2019-01-13

#### Added

* [#54](https://github.com/shlinkio/shlink-web-client/issues/54) Added stats by city graphic in visits page.
* [#55](https://github.com/shlinkio/shlink-web-client/issues/55) Added map in visits page locating cities from which visits have occurred.

#### Changed

* [#87](https://github.com/shlinkio/shlink-web-client/issues/87) and [#89](https://github.com/shlinkio/shlink-web-client/issues/89) Updated all dependencies to latest major versions.
* [#96](https://github.com/shlinkio/shlink-web-client/issues/96) Updated visits page to load visits in multiple paginated requests of `5000` visits when used shlink server supports it. This will prevent shlink to hang when trying to load big amounts of visits.
* [#71](https://github.com/shlinkio/shlink-web-client/issues/71) Improved tests and increased code coverage.

#### Deprecated

* *Nothing*

#### Removed

* [#59](https://github.com/shlinkio/shlink-web-client/issues/59) Dropped support for old browsers. Internet explorer and dead browsers are no longer supported.
* [#97](https://github.com/shlinkio/shlink-web-client/issues/97) Dropped support for authentication via `Authorization` header with Bearer type and JWT, which will make this version no longer work with shlink earlier than v1.13.0.

#### Fixed

* *Nothing*


## 1.2.1 - 2018-12-21

#### Added

* *Nothing*

#### Changed

* [#80](https://github.com/shlinkio/shlink-web-client/issues/80) Deeply refactored app to do true dependency injection with an IoC container.
* [#79](https://github.com/shlinkio/shlink-web-client/issues/79) Updated to nginx 1.15.7 as the base docker image.
* [#75](https://github.com/shlinkio/shlink-web-client/issues/75) Prevented duplicated `yarn build` in travis when a tag exists.

#### Deprecated

* *Nothing*

#### Removed

* *Nothing*

#### Fixed

* [#77](https://github.com/shlinkio/shlink-web-client/issues/77) Sortable graphs ordering is now case insensitive.


## 1.2.0 - 2018-11-01

#### Added

* [#65](https://github.com/shlinkio/shlink-web-client/issues/65) Added sorting to both countries and referrers stats graphs.
* [#14](https://github.com/shlinkio/shlink-web-client/issues/14) Documented how to build the project so that it can be served from a subpath.

#### Changed

* [#50](https://github.com/shlinkio/shlink-web-client/issues/50) Improved tests and increased code coverage.

#### Deprecated

* *Nothing*

#### Removed

* *Nothing*

#### Fixed

* [#66](https://github.com/shlinkio/shlink-web-client/issues/66) Fixed tooltips in graphs with too small bars not being displayed.


## 1.1.1 - 2018-10-20

#### Added

* [#57](https://github.com/shlinkio/shlink-web-client/issues/57) Automated release generation in travis build.

#### Changed

* *Nothing*

#### Deprecated

* *Nothing*

#### Removed

* *Nothing*

#### Fixed

* [#63](https://github.com/shlinkio/shlink-web-client/issues/63) Improved how bar charts are rendered in stats page, making them try to calculate a bigger height for big data sets.
* [#56](https://github.com/shlinkio/shlink-web-client/issues/56) Ensured `ColorGenerator` matches keys in a case insensitive way.
* [#53](https://github.com/shlinkio/shlink-web-client/issues/53) Fixed missing margin between date fields in visits page for mobile devices.


## 1.1.0 - 2018-09-16

#### Added

* [#47](https://github.com/shlinkio/shlink-web-client/issues/47) Added support to delete short URLs (requires [shlink v1.12.0](https://github.com/shlinkio/shlink/releases/tag/v1.12.0) or greater).

#### Changed

* [#35](https://github.com/shlinkio/shlink-web-client/issues/35) Visits component split into two, which makes the header not to be refreshed when filtering by date, and also the visits global counter now reflects the actual number of visits which fulfill current filter.
* [#36](https://github.com/shlinkio/shlink-web-client/issues/36) Tags selector now autocompletes existing tag names, to prevent typos and ease reusing existing tags.
* [#39](https://github.com/shlinkio/shlink-web-client/issues/39) Defined `propTypes` as static properties in class components.

#### Deprecated

* *Nothing*

#### Removed

* *Nothing*

#### Fixed

* [#49](https://github.com/shlinkio/shlink-web-client/issues/49) Ensured filtering parameters are reseted when list component is unmounted so that params are not mixed when coming back.
* [#45](https://github.com/shlinkio/shlink-web-client/issues/45) Ensured graphs x-axis start at `0` and don't use decimals.
* [#51](https://github.com/shlinkio/shlink-web-client/issues/51) When editing short URL tags, the value returned form server is used when refreshing the list, which is normalized.


## 1.0.1 - 2018-09-02

#### Added

* *Nothing*

#### Changed

* *Nothing*

#### Deprecated

* *Nothing*

#### Removed

* *Nothing*

#### Fixed

* [#42](https://github.com/shlinkio/shlink-web-client/issues/42) Fixed selected tags lost when navigating between pages in short URLs list.
* [#43](https://github.com/shlinkio/shlink-web-client/issues/43) Fixed "List short URLs" menu item only selected when in first page.


## 1.0.0 - 2018-08-26

#### Added

* [#4](https://github.com/shlinkio/shlink-web-client/issues/4) Now it is possible to export and import servers.

    * Export all servers in a CSV file.
    * Import the CSV in a different device.

* [#3](https://github.com/shlinkio/shlink-web-client/issues/3) Added tags management.

    * List existing tags, and filter the list.
    * Change their name and color.
    * Jump to URLs list filtering by one tag.

* [#5](https://github.com/shlinkio/shlink-web-client/issues/5) Tags for existing URLs can be edited now.
* [#24](https://github.com/shlinkio/shlink-web-client/issues/24) Improved left menu in mobile devices, which is now a swipeable sidebar instead of a stacked top bar.
* [#22](https://github.com/shlinkio/shlink-web-client/issues/22) Improved code coverage.
* [#28](https://github.com/shlinkio/shlink-web-client/issues/28) Added integration with [Scrutinizer](https://scrutinizer-ci.com/g/shlinkio/shlink-web-client/).

#### Changed

* [#33](https://github.com/shlinkio/shlink-web-client/issues/33) Changed to [adidas coding style](https://github.com/adidas/js-linter-configs) for Javascript.
* [#32](https://github.com/shlinkio/shlink-web-client/issues/32) Changed to [adidas coding style](https://github.com/adidas/js-linter-configs) for stylesheets.
* [#26](https://github.com/shlinkio/shlink-web-client/issues/26) The tags input now displays tags using their actual color.

#### Deprecated

* *Nothing*

#### Removed

* *Nothing*

#### Fixed

* *Nothing*


## 0.2.0 - 2018-08-12

#### Added

* [#12](https://github.com/shlinkio/shlink-web-client/issues/12) Improved code coverage
* [#20](https://github.com/shlinkio/shlink-web-client/issues/20) Added servers list in welcome page, as well as added link to create one when none exist.

#### Changed

* [#11](https://github.com/shlinkio/shlink-web-client/issues/11) Improved app icons fro progressive web apps.

#### Deprecated

* *Nothing*

#### Removed

* *Nothing*

#### Fixed

* [#19](https://github.com/shlinkio/shlink-web-client/issues/19) Added workaround in tags input so that it is possible to add tags on Android devices.
* [#17](https://github.com/shlinkio/shlink-web-client/issues/17) Fixed short URLs list not being sortable in mobile resolutions.
* [#13](https://github.com/shlinkio/shlink-web-client/issues/13) Improved visits page on mobile resolutions.


## 0.1.1 - 2018-08-06

#### Added

* [#15](https://github.com/shlinkio/shlink-web-client/issues/15) Added a `Dockerfile` that can be used to generate a distributable docker image

#### Changed

* *Nothing*

#### Deprecated

* *Nothing*

#### Removed

* *Nothing*

#### Fixed

* *Nothing*
