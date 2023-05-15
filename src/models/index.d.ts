import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled } from "@aws-amplify/datastore";





type EagerMeeting = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Meeting, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly meetingDate?: string | null;
  readonly speaker?: string | null;
  readonly title?: string | null;
  readonly description?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyMeeting = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Meeting, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly meetingDate?: string | null;
  readonly speaker?: string | null;
  readonly title?: string | null;
  readonly description?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Meeting = LazyLoading extends LazyLoadingDisabled ? EagerMeeting : LazyMeeting

export declare const Meeting: (new (init: ModelInit<Meeting>) => Meeting) & {
  copyOf(source: Meeting, mutator: (draft: MutableModel<Meeting>) => MutableModel<Meeting> | void): Meeting;
}