import reducer, {
  EDIT_SHORT_URL_START,
  EDIT_SHORT_URL_ERROR,
  SHORT_URL_EDITED,
  editShortUrl,
} from '../../../src/short-urls/reducers/shortUrlEdition';

describe('shortUrlEditionReducer', () => {
  const longUrl = 'https://shlink.io';
  const shortCode = 'abc123';

  describe('reducer', () => {
    it('returns loading on EDIT_SHORT_URL_START', () => {
      expect(reducer({}, { type: EDIT_SHORT_URL_START })).toEqual({
        saving: true,
        error: false,
      });
    });

    it('returns error on EDIT_SHORT_URL_ERROR', () => {
      expect(reducer({}, { type: EDIT_SHORT_URL_ERROR })).toEqual({
        saving: false,
        error: true,
      });
    });

    it('returns provided tags and shortCode on SHORT_URL_EDITED', () => {
      expect(reducer({}, { type: SHORT_URL_EDITED, longUrl, shortCode })).toEqual({
        longUrl,
        shortCode,
        saving: false,
        error: false,
      });
    });
  });

  describe('editShortUrl', () => {
    const updateShortUrlMeta = jest.fn().mockResolvedValue({});
    const buildShlinkApiClient = jest.fn().mockReturnValue({ updateShortUrlMeta });
    const dispatch = jest.fn();

    afterEach(jest.clearAllMocks);

    it.each([[ undefined ], [ null ], [ 'example.com' ]])('dispatches long URL on success', async (domain) => {
      await editShortUrl(buildShlinkApiClient)(shortCode, domain, longUrl)(dispatch);

      expect(buildShlinkApiClient).toHaveBeenCalledTimes(1);
      expect(updateShortUrlMeta).toHaveBeenCalledTimes(1);
      expect(updateShortUrlMeta).toHaveBeenCalledWith(shortCode, domain, { longUrl });
      expect(dispatch).toHaveBeenCalledTimes(2);
      expect(dispatch).toHaveBeenNthCalledWith(1, { type: EDIT_SHORT_URL_START });
      expect(dispatch).toHaveBeenNthCalledWith(2, { type: SHORT_URL_EDITED, longUrl, shortCode, domain });
    });

    it('dispatches error on failure', async () => {
      const error = new Error();

      updateShortUrlMeta.mockRejectedValue(error);

      try {
        await editShortUrl(buildShlinkApiClient)(shortCode, undefined, longUrl)(dispatch);
      } catch (e) {
        expect(e).toBe(error);
      }

      expect(buildShlinkApiClient).toHaveBeenCalledTimes(1);
      expect(updateShortUrlMeta).toHaveBeenCalledTimes(1);
      expect(updateShortUrlMeta).toHaveBeenCalledWith(shortCode, undefined, { longUrl });
      expect(dispatch).toHaveBeenCalledTimes(2);
      expect(dispatch).toHaveBeenNthCalledWith(1, { type: EDIT_SHORT_URL_START });
      expect(dispatch).toHaveBeenNthCalledWith(2, { type: EDIT_SHORT_URL_ERROR });
    });
  });
});
