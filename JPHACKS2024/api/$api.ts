import type { AspidaClient, BasicHeaders } from 'aspida';
import { dataToURLString } from 'aspida';
import type { Methods as Methods_r5jfvk } from './stations/_stationId@string/photo';
import type { Methods as Methods_v35loa } from './stations/_stationId@string/photosURL';
import type { Methods as Methods_r1or4w } from './stations/_stationId@string/vote';
import type { Methods as Methods_z07luj } from './stations/nearby';
import type { Methods as Methods_1klvb2w } from './teams';

const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
  const prefix = (baseURL === undefined ? 'http://localhost/api/v0' : baseURL).replace(/\/$/, '');
  const PATH0 = '/stations';
  const PATH1 = '/photo';
  const PATH2 = '/photosURL';
  const PATH3 = '/vote';
  const PATH4 = '/stations/nearby';
  const PATH5 = '/teams';
  const GET = 'GET';
  const POST = 'POST';

  return {
    stations: {
      _stationId: (val1: string) => {
        const prefix1 = `${PATH0}/${val1}`;

        return {
          photo: {
            /**
             * 指定されたステーションに対して写真をアップロードします。
             * @returns 写真が正常にアップロードされました。
             */
            post: (option: { body: Methods_r5jfvk['post']['reqBody'], config?: T | undefined }) =>
              fetch<Methods_r5jfvk['post']['resBody'], BasicHeaders, Methods_r5jfvk['post']['status']>(prefix, `${prefix1}${PATH1}`, POST, option, 'FormData').json(),
            /**
             * 指定されたステーションに対して写真をアップロードします。
             * @returns 写真が正常にアップロードされました。
             */
            $post: (option: { body: Methods_r5jfvk['post']['reqBody'], config?: T | undefined }) =>
              fetch<Methods_r5jfvk['post']['resBody'], BasicHeaders, Methods_r5jfvk['post']['status']>(prefix, `${prefix1}${PATH1}`, POST, option, 'FormData').json().then(r => r.body),
            $path: () => `${prefix}${prefix1}${PATH1}`,
          },
          photosURL: {
            /**
             * 指定されたステーションにアップロードされた写真のURLリストを取得します。
             * @returns ステーションにアップロードされた写真のURLリスト。
             */
            get: (option?: { config?: T | undefined } | undefined) =>
              fetch<Methods_v35loa['get']['resBody'], BasicHeaders, Methods_v35loa['get']['status']>(prefix, `${prefix1}${PATH2}`, GET, option).json(),
            /**
             * 指定されたステーションにアップロードされた写真のURLリストを取得します。
             * @returns ステーションにアップロードされた写真のURLリスト。
             */
            $get: (option?: { config?: T | undefined } | undefined) =>
              fetch<Methods_v35loa['get']['resBody'], BasicHeaders, Methods_v35loa['get']['status']>(prefix, `${prefix1}${PATH2}`, GET, option).json().then(r => r.body),
            $path: () => `${prefix}${prefix1}${PATH2}`,
          },
          vote: {
            /**
             * 指定されたステーションに対してRedチームまたはGreenチームに投票します。
             * @returns 投票が成功しました。
             */
            post: (option: { body: Methods_r1or4w['post']['reqBody'], config?: T | undefined }) =>
              fetch<Methods_r1or4w['post']['resBody'], BasicHeaders, Methods_r1or4w['post']['status']>(prefix, `${prefix1}${PATH3}`, POST, option).json(),
            /**
             * 指定されたステーションに対してRedチームまたはGreenチームに投票します。
             * @returns 投票が成功しました。
             */
            $post: (option: { body: Methods_r1or4w['post']['reqBody'], config?: T | undefined }) =>
              fetch<Methods_r1or4w['post']['resBody'], BasicHeaders, Methods_r1or4w['post']['status']>(prefix, `${prefix1}${PATH3}`, POST, option).json().then(r => r.body),
            $path: () => `${prefix}${prefix1}${PATH3}`,
          },
        };
      },
      nearby: {
        /**
         * 指定された場所の周辺にあるステーションの座標を返します。
         * @returns 周辺のステーションとその座標のリスト。
         */
        get: (option: { query: Methods_z07luj['get']['query'], config?: T | undefined }) =>
          fetch<Methods_z07luj['get']['resBody'], BasicHeaders, Methods_z07luj['get']['status']>(prefix, PATH4, GET, option).json(),
        /**
         * 指定された場所の周辺にあるステーションの座標を返します。
         * @returns 周辺のステーションとその座標のリスト。
         */
        $get: (option: { query: Methods_z07luj['get']['query'], config?: T | undefined }) =>
          fetch<Methods_z07luj['get']['resBody'], BasicHeaders, Methods_z07luj['get']['status']>(prefix, PATH4, GET, option).json().then(r => r.body),
        $path: (option?: { method?: 'get' | undefined; query: Methods_z07luj['get']['query'] } | undefined) =>
          `${prefix}${PATH4}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
      },
    },
    teams: {
      /**
       * RedチームとGreenチームのemojiとお題、そして全体のお知らせを取得します。
       * @returns チームの情報のリスト。
       */
      get: (option?: { config?: T | undefined } | undefined) =>
        fetch<Methods_1klvb2w['get']['resBody'], BasicHeaders, Methods_1klvb2w['get']['status']>(prefix, PATH5, GET, option).json(),
      /**
       * RedチームとGreenチームのemojiとお題、そして全体のお知らせを取得します。
       * @returns チームの情報のリスト。
       */
      $get: (option?: { config?: T | undefined } | undefined) =>
        fetch<Methods_1klvb2w['get']['resBody'], BasicHeaders, Methods_1klvb2w['get']['status']>(prefix, PATH5, GET, option).json().then(r => r.body),
      $path: () => `${prefix}${PATH5}`,
    },
  };
};

export type ApiInstance = ReturnType<typeof api>;
export default api;
