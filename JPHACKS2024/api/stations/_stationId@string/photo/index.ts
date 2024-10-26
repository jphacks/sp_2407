/* eslint-disable */
import type { DefineMethods } from 'aspida';
import type { ReadStream } from 'fs';
import type * as Types from '../../../@types';

export type Methods = DefineMethods<{
  /** 指定されたステーションに対して写真をアップロードします。 */
  post: {
    status: 200;
    /** 写真が正常にアップロードされました。 */
    resBody: Types.PhotoUploadResponse;
    reqFormat: FormData;

    reqBody: {
      /** アップロードする写真ファイル。 */
      photo?: (File | ReadStream) | undefined;
    };
  };
}>;
