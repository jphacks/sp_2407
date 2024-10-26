/* eslint-disable */
import type { DefineMethods } from 'aspida';
import type * as Types from '../@types';

export type Methods = DefineMethods<{
  /** RedチームとGreenチームのemojiとお題、そして全体のお知らせを取得します。 */
  get: {
    status: 200;
    /** チームの情報のリスト。 */
    resBody: Types.TeamsResponse;
  };
}>;
