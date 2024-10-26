/* eslint-disable */
import type { DefineMethods } from 'aspida';
import type * as Types from '../../../@types';

export type Methods = DefineMethods<{
  /** 指定されたステーションにアップロードされた写真のURLリストを取得します。 */
  get: {
    status: 200;
    /** ステーションにアップロードされた写真のURLリスト。 */
    resBody: Types.PhotosURLResponse;
  };
}>;
