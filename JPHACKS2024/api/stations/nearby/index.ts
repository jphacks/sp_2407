/* eslint-disable */
import type { DefineMethods } from 'aspida';
import type * as Types from '../../@types';

export type Methods = DefineMethods<{
  /** 指定された場所の周辺にあるステーションの座標を返します。 */
  get: {
    query: {
      /** 現在の場所の緯度。 */
      latitude: number;
      /** 現在の場所の経度。 */
      longitude: number;
      /** ステーションを検索する半径（メートル単位）。デフォルトは1000メートルです。 */
      radius?: number | undefined;
    };

    status: 200;
    /** 周辺のステーションとその座標のリスト。 */
    resBody: Types.NearbyStationsResponse;
  };
}>;
