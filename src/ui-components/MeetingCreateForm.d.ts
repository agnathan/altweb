/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type MeetingCreateFormInputValues = {
    meetingDate?: string;
    speaker?: string;
    title?: string;
    description?: string;
    photo?: string;
    videoUrl?: string;
    thumbnail?: string;
    youtubeUrl?: string;
    rumbleUrl?: string;
    meetingDateTime?: string;
};
export declare type MeetingCreateFormValidationValues = {
    meetingDate?: ValidationFunction<string>;
    speaker?: ValidationFunction<string>;
    title?: ValidationFunction<string>;
    description?: ValidationFunction<string>;
    photo?: ValidationFunction<string>;
    videoUrl?: ValidationFunction<string>;
    thumbnail?: ValidationFunction<string>;
    youtubeUrl?: ValidationFunction<string>;
    rumbleUrl?: ValidationFunction<string>;
    meetingDateTime?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type MeetingCreateFormOverridesProps = {
    MeetingCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    meetingDate?: PrimitiveOverrideProps<TextFieldProps>;
    speaker?: PrimitiveOverrideProps<TextFieldProps>;
    title?: PrimitiveOverrideProps<TextFieldProps>;
    description?: PrimitiveOverrideProps<TextFieldProps>;
    photo?: PrimitiveOverrideProps<TextFieldProps>;
    videoUrl?: PrimitiveOverrideProps<TextFieldProps>;
    thumbnail?: PrimitiveOverrideProps<TextFieldProps>;
    youtubeUrl?: PrimitiveOverrideProps<TextFieldProps>;
    rumbleUrl?: PrimitiveOverrideProps<TextFieldProps>;
    meetingDateTime?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type MeetingCreateFormProps = React.PropsWithChildren<{
    overrides?: MeetingCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: MeetingCreateFormInputValues) => MeetingCreateFormInputValues;
    onSuccess?: (fields: MeetingCreateFormInputValues) => void;
    onError?: (fields: MeetingCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: MeetingCreateFormInputValues) => MeetingCreateFormInputValues;
    onValidate?: MeetingCreateFormValidationValues;
} & React.CSSProperties>;
export default function MeetingCreateForm(props: MeetingCreateFormProps): React.ReactElement;
