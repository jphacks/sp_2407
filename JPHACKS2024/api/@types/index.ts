/* eslint-disable */
export type NearbyStationsResponse = StationInformation[]

export type StationInformation = {
  /** ステーションのID。 */
  _id?: string | undefined;
  /** ステーションの名前。 */
  stationName?: string | undefined;

  coordinates?: {
    latitude?: number | undefined;
    longitude?: number | undefined;
  } | undefined;

  /** アップロードされた写真のURLリスト。 */
  photoUrls?: string[] | undefined;

  totalVotes?: {
    /** Redチームの総投票数。 */
    Red?: number | undefined;
    /** Greenチームの総投票数。 */
    Green?: number | undefined;
  } | undefined;
}

export type VoteResponse = StationInformation

export type TeamProperties = {
  /** チームのemoji。 */
  emoji?: string | undefined;
  /** チームのお題。 */
  theme?: string | undefined;
}

export type TeamsResponse = {
  /** チームを選ぶ際に表示される全体へのメッセージ。 */
  teamSelectionMessage?: string | undefined;
  Red?: TeamProperties | undefined;
  Green?: TeamProperties | undefined;
}

export type PhotoUploadResponse = {
  /** アップロードされた写真のURLリスト。 */
  photoUrls?: string[] | undefined;
}

export type PhotosURLResponse = {
  /** ステーションにアップロードされた写真のURLリスト。 */
  photoUrls?: string[] | undefined;
}
