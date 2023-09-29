/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Meeting } from "../models";
import { fetchByPath, validateField } from "./utils";
import { DataStore } from "aws-amplify";
export default function MeetingUpdateForm(props) {
  const {
    id: idProp,
    meeting: meetingModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    meetingDate: "",
    speaker: "",
    title: "",
    description: "",
    photo: "",
    videoUrl: "",
    thumbnail: "",
    youtubeUrl: "",
    rumbleUrl: "",
    meetingDateTime: "",
  };
  const [meetingDate, setMeetingDate] = React.useState(
    initialValues.meetingDate
  );
  const [speaker, setSpeaker] = React.useState(initialValues.speaker);
  const [title, setTitle] = React.useState(initialValues.title);
  const [description, setDescription] = React.useState(
    initialValues.description
  );
  const [photo, setPhoto] = React.useState(initialValues.photo);
  const [videoUrl, setVideoUrl] = React.useState(initialValues.videoUrl);
  const [thumbnail, setThumbnail] = React.useState(initialValues.thumbnail);
  const [youtubeUrl, setYoutubeUrl] = React.useState(initialValues.youtubeUrl);
  const [rumbleUrl, setRumbleUrl] = React.useState(initialValues.rumbleUrl);
  const [meetingDateTime, setMeetingDateTime] = React.useState(
    initialValues.meetingDateTime
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = meetingRecord
      ? { ...initialValues, ...meetingRecord }
      : initialValues;
    setMeetingDate(cleanValues.meetingDate);
    setSpeaker(cleanValues.speaker);
    setTitle(cleanValues.title);
    setDescription(cleanValues.description);
    setPhoto(cleanValues.photo);
    setVideoUrl(cleanValues.videoUrl);
    setThumbnail(cleanValues.thumbnail);
    setYoutubeUrl(cleanValues.youtubeUrl);
    setRumbleUrl(cleanValues.rumbleUrl);
    setMeetingDateTime(cleanValues.meetingDateTime);
    setErrors({});
  };
  const [meetingRecord, setMeetingRecord] = React.useState(meetingModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? await DataStore.query(Meeting, idProp)
        : meetingModelProp;
      setMeetingRecord(record);
    };
    queryData();
  }, [idProp, meetingModelProp]);
  React.useEffect(resetStateValues, [meetingRecord]);
  const validations = {
    meetingDate: [],
    speaker: [],
    title: [{ type: "Required" }],
    description: [{ type: "Required" }],
    photo: [{ type: "Required" }, { type: "URL" }],
    videoUrl: [{ type: "URL" }],
    thumbnail: [{ type: "Required" }, { type: "URL" }],
    youtubeUrl: [{ type: "URL" }],
    rumbleUrl: [],
    meetingDateTime: [{ type: "Required" }],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value =
      currentValue && getDisplayValue
        ? getDisplayValue(currentValue)
        : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  const convertToLocal = (date) => {
    const df = new Intl.DateTimeFormat("default", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      calendar: "iso8601",
      numberingSystem: "latn",
      hourCycle: "h23",
    });
    const parts = df.formatToParts(date).reduce((acc, part) => {
      acc[part.type] = part.value;
      return acc;
    }, {});
    return `${parts.year}-${parts.month}-${parts.day}T${parts.hour}:${parts.minute}`;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          meetingDate,
          speaker,
          title,
          description,
          photo,
          videoUrl,
          thumbnail,
          youtubeUrl,
          rumbleUrl,
          meetingDateTime,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value === "") {
              modelFields[key] = null;
            }
          });
          await DataStore.save(
            Meeting.copyOf(meetingRecord, (updated) => {
              Object.assign(updated, modelFields);
            })
          );
          if (onSuccess) {
            onSuccess(modelFields);
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...getOverrideProps(overrides, "MeetingUpdateForm")}
      {...rest}
    >
      <TextField
        label="Meeting date"
        isRequired={false}
        isReadOnly={false}
        type="date"
        value={meetingDate}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              meetingDate: value,
              speaker,
              title,
              description,
              photo,
              videoUrl,
              thumbnail,
              youtubeUrl,
              rumbleUrl,
              meetingDateTime,
            };
            const result = onChange(modelFields);
            value = result?.meetingDate ?? value;
          }
          if (errors.meetingDate?.hasError) {
            runValidationTasks("meetingDate", value);
          }
          setMeetingDate(value);
        }}
        onBlur={() => runValidationTasks("meetingDate", meetingDate)}
        errorMessage={errors.meetingDate?.errorMessage}
        hasError={errors.meetingDate?.hasError}
        {...getOverrideProps(overrides, "meetingDate")}
      ></TextField>
      <TextField
        label="Speaker"
        isRequired={false}
        isReadOnly={false}
        value={speaker}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              meetingDate,
              speaker: value,
              title,
              description,
              photo,
              videoUrl,
              thumbnail,
              youtubeUrl,
              rumbleUrl,
              meetingDateTime,
            };
            const result = onChange(modelFields);
            value = result?.speaker ?? value;
          }
          if (errors.speaker?.hasError) {
            runValidationTasks("speaker", value);
          }
          setSpeaker(value);
        }}
        onBlur={() => runValidationTasks("speaker", speaker)}
        errorMessage={errors.speaker?.errorMessage}
        hasError={errors.speaker?.hasError}
        {...getOverrideProps(overrides, "speaker")}
      ></TextField>
      <TextField
        label={
          <span style={{ display: "inline-flex" }}>
            <span>Title</span>
            <span style={{ color: "red" }}>*</span>
          </span>
        }
        isRequired={true}
        isReadOnly={false}
        value={title}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              meetingDate,
              speaker,
              title: value,
              description,
              photo,
              videoUrl,
              thumbnail,
              youtubeUrl,
              rumbleUrl,
              meetingDateTime,
            };
            const result = onChange(modelFields);
            value = result?.title ?? value;
          }
          if (errors.title?.hasError) {
            runValidationTasks("title", value);
          }
          setTitle(value);
        }}
        onBlur={() => runValidationTasks("title", title)}
        errorMessage={errors.title?.errorMessage}
        hasError={errors.title?.hasError}
        {...getOverrideProps(overrides, "title")}
      ></TextField>
      <TextField
        label={
          <span style={{ display: "inline-flex" }}>
            <span>Description</span>
            <span style={{ color: "red" }}>*</span>
          </span>
        }
        isRequired={true}
        isReadOnly={false}
        value={description}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              meetingDate,
              speaker,
              title,
              description: value,
              photo,
              videoUrl,
              thumbnail,
              youtubeUrl,
              rumbleUrl,
              meetingDateTime,
            };
            const result = onChange(modelFields);
            value = result?.description ?? value;
          }
          if (errors.description?.hasError) {
            runValidationTasks("description", value);
          }
          setDescription(value);
        }}
        onBlur={() => runValidationTasks("description", description)}
        errorMessage={errors.description?.errorMessage}
        hasError={errors.description?.hasError}
        {...getOverrideProps(overrides, "description")}
      ></TextField>
      <TextField
        label={
          <span style={{ display: "inline-flex" }}>
            <span>Photo</span>
            <span style={{ color: "red" }}>*</span>
          </span>
        }
        isRequired={true}
        isReadOnly={false}
        value={photo}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              meetingDate,
              speaker,
              title,
              description,
              photo: value,
              videoUrl,
              thumbnail,
              youtubeUrl,
              rumbleUrl,
              meetingDateTime,
            };
            const result = onChange(modelFields);
            value = result?.photo ?? value;
          }
          if (errors.photo?.hasError) {
            runValidationTasks("photo", value);
          }
          setPhoto(value);
        }}
        onBlur={() => runValidationTasks("photo", photo)}
        errorMessage={errors.photo?.errorMessage}
        hasError={errors.photo?.hasError}
        {...getOverrideProps(overrides, "photo")}
      ></TextField>
      <TextField
        label="Video url"
        isRequired={false}
        isReadOnly={false}
        value={videoUrl}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              meetingDate,
              speaker,
              title,
              description,
              photo,
              videoUrl: value,
              thumbnail,
              youtubeUrl,
              rumbleUrl,
              meetingDateTime,
            };
            const result = onChange(modelFields);
            value = result?.videoUrl ?? value;
          }
          if (errors.videoUrl?.hasError) {
            runValidationTasks("videoUrl", value);
          }
          setVideoUrl(value);
        }}
        onBlur={() => runValidationTasks("videoUrl", videoUrl)}
        errorMessage={errors.videoUrl?.errorMessage}
        hasError={errors.videoUrl?.hasError}
        {...getOverrideProps(overrides, "videoUrl")}
      ></TextField>
      <TextField
        label={
          <span style={{ display: "inline-flex" }}>
            <span>Thumbnail</span>
            <span style={{ color: "red" }}>*</span>
          </span>
        }
        isRequired={true}
        isReadOnly={false}
        value={thumbnail}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              meetingDate,
              speaker,
              title,
              description,
              photo,
              videoUrl,
              thumbnail: value,
              youtubeUrl,
              rumbleUrl,
              meetingDateTime,
            };
            const result = onChange(modelFields);
            value = result?.thumbnail ?? value;
          }
          if (errors.thumbnail?.hasError) {
            runValidationTasks("thumbnail", value);
          }
          setThumbnail(value);
        }}
        onBlur={() => runValidationTasks("thumbnail", thumbnail)}
        errorMessage={errors.thumbnail?.errorMessage}
        hasError={errors.thumbnail?.hasError}
        {...getOverrideProps(overrides, "thumbnail")}
      ></TextField>
      <TextField
        label="Youtube url"
        isRequired={false}
        isReadOnly={false}
        value={youtubeUrl}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              meetingDate,
              speaker,
              title,
              description,
              photo,
              videoUrl,
              thumbnail,
              youtubeUrl: value,
              rumbleUrl,
              meetingDateTime,
            };
            const result = onChange(modelFields);
            value = result?.youtubeUrl ?? value;
          }
          if (errors.youtubeUrl?.hasError) {
            runValidationTasks("youtubeUrl", value);
          }
          setYoutubeUrl(value);
        }}
        onBlur={() => runValidationTasks("youtubeUrl", youtubeUrl)}
        errorMessage={errors.youtubeUrl?.errorMessage}
        hasError={errors.youtubeUrl?.hasError}
        {...getOverrideProps(overrides, "youtubeUrl")}
      ></TextField>
      <TextField
        label="Rumble url"
        isRequired={false}
        isReadOnly={false}
        value={rumbleUrl}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              meetingDate,
              speaker,
              title,
              description,
              photo,
              videoUrl,
              thumbnail,
              youtubeUrl,
              rumbleUrl: value,
              meetingDateTime,
            };
            const result = onChange(modelFields);
            value = result?.rumbleUrl ?? value;
          }
          if (errors.rumbleUrl?.hasError) {
            runValidationTasks("rumbleUrl", value);
          }
          setRumbleUrl(value);
        }}
        onBlur={() => runValidationTasks("rumbleUrl", rumbleUrl)}
        errorMessage={errors.rumbleUrl?.errorMessage}
        hasError={errors.rumbleUrl?.hasError}
        {...getOverrideProps(overrides, "rumbleUrl")}
      ></TextField>
      <TextField
        label={
          <span style={{ display: "inline-flex" }}>
            <span>Meeting date time</span>
            <span style={{ color: "red" }}>*</span>
          </span>
        }
        isRequired={true}
        isReadOnly={false}
        type="datetime-local"
        value={meetingDateTime && convertToLocal(new Date(meetingDateTime))}
        onChange={(e) => {
          let value =
            e.target.value === "" ? "" : new Date(e.target.value).toISOString();
          if (onChange) {
            const modelFields = {
              meetingDate,
              speaker,
              title,
              description,
              photo,
              videoUrl,
              thumbnail,
              youtubeUrl,
              rumbleUrl,
              meetingDateTime: value,
            };
            const result = onChange(modelFields);
            value = result?.meetingDateTime ?? value;
          }
          if (errors.meetingDateTime?.hasError) {
            runValidationTasks("meetingDateTime", value);
          }
          setMeetingDateTime(value);
        }}
        onBlur={() => runValidationTasks("meetingDateTime", meetingDateTime)}
        errorMessage={errors.meetingDateTime?.errorMessage}
        hasError={errors.meetingDateTime?.hasError}
        {...getOverrideProps(overrides, "meetingDateTime")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Reset"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          isDisabled={!(idProp || meetingModelProp)}
          {...getOverrideProps(overrides, "ResetButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={
              !(idProp || meetingModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
