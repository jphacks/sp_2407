/* eslint-disable */
import type { DefineMethods } from 'aspida';
import type * as Types from '../../../@types';

export type Methods = DefineMethods<{
  /** 指定されたステーションに対してRedチームまたはGreenチームに投票します。 */
  post: {
    status: 200;
    /** 投票が成功しました。 */
    resBody: Types.VoteResponse;

    reqBody: {
      /** 投票するチームの名前。 */
      team?: 'Red' | 'Green' | undefined;
    };
  };
}>;
