import React, { useEffect, useState } from "react";
import { Image } from "react-bootstrap";
import SettingsFormEditButton from "./SettingsFormEditButton";
import FormBase from "../helper/FormBase";
import FlexRow from "../helper/FlexRow";
import SettingsFormGroup from "./SettingsFormGroup";
import SettingsFormLabel from "./SettingsFormLabel";
import SettingsFormInput from "./SettingsFormInput";
import SettingsFromInput from "./SettingsFormInput";
import SettingsModal from "./SettingsModal";
import SettingsModalColor from "./SettingsModalColor";
import SettingsModalFile from "./SettingsModalFile";
import { useDispatch, useSelector } from "react-redux";
import { getCurrentUser } from "../../redux/userSlice";
import { toAvatarSrc } from "../../utils/imageUtils";
import { fetchCurrentUserAPI, updateUserAPI } from "../../redux/api";
import { FAILED, READY } from "../../redux/APIStates";

const SettingsView = () => {
  const dispatch = useDispatch();
  const [editName, setEditName] = useState(false);
  const [editLastName, setEditLastName] = useState(false);
  const [editColor, setEditColor] = useState(false);
  const [editPicture, setEditPicture] = useState(false);
  const user = useSelector((state) => getCurrentUser(state));
  const assign = (prop) => {
    return Object.assign({}, user.entity, { avatar: null }, prop);
  };
  const send = (prop) => {
    dispatch(updateUserAPI(assign(prop)));
  };

  useEffect(() => {
    dispatch(fetchCurrentUserAPI());
  }, [dispatch]);

  if (user?.status === READY) {
    const { firstName, lastName, email, avatar, preferredColor } = user.entity;
    return (
      <React.Fragment>
        <FormBase sm={12} md={10} lg={8} xl={7}>
          <FlexRow>
            <Image
              src={toAvatarSrc(avatar)}
              onClick={() => setEditPicture(true)}
              className="rounded-circle trello-settings-icon trello-clickable"
            />
            <div className="ml-5">
              <SettingsFormLabel>Preferowany kolor</SettingsFormLabel>
              <div
                className="rounded-circle trello-settings-color-container mt-2"
                style={{ backgroundColor: preferredColor }}
                onClick={() => setEditColor(true)}
              ></div>
            </div>
          </FlexRow>
          <SettingsFormGroup>
            <SettingsFormLabel>IMIĘ</SettingsFormLabel>
            <FlexRow>
              <SettingsFormInput>{firstName}</SettingsFormInput>
              <SettingsFormEditButton setEdit={setEditName} />
            </FlexRow>
          </SettingsFormGroup>
          <SettingsFormGroup>
            <SettingsFormLabel>NAZWISKO</SettingsFormLabel>
            <FlexRow>
              <SettingsFromInput>{lastName}</SettingsFromInput>
              <SettingsFormEditButton setEdit={setEditLastName} />
            </FlexRow>
          </SettingsFormGroup>
          <SettingsFormGroup>
            <SettingsFormLabel>EMAIL</SettingsFormLabel>
            <FlexRow>
              <SettingsFormInput className="mt-2">{email}</SettingsFormInput>
            </FlexRow>
          </SettingsFormGroup>
          <div className="mt-4">
            <p className="trello-form-clickable text-align-left">ZMIEŃ HASŁO</p>
          </div>
        </FormBase>
        <SettingsModal
          title={"Edytuj imię"}
          label={"IMIĘ"}
          onConfirm={(value) => {
            send({ firstName: value });
            setEditName(false);
          }}
          onCancel={() => {
            setEditName(false);
          }}
          show={editName}
          type={"text"}
          initialField={firstName}
        />
        <SettingsModal
          title={"Edytuj nazwisko"}
          label={"NAZWISKO"}
          onConfirm={(value) => {
            send({ lastName: value });
            setEditLastName(false);
          }}
          onCancel={() => setEditLastName(false)}
          show={editLastName}
          type={"text"}
          initialField={lastName}
        />
        <SettingsModalColor
          show={editColor}
          onCancel={() => setEditColor(false)}
          onConfirm={(value) => {
            send({ preferredColor: value });
            setEditColor(false);
          }}
          initialField={preferredColor}
        />
        <SettingsModalFile
          show={editPicture}
          onCancel={() => setEditPicture(false)}
          onConfirm={(value) => {
            send({ avatar: value });
            setEditPicture(false);
          }}
          initialField={toAvatarSrc(avatar)}
        />
      </React.Fragment>
    );
  } else if (user?.status === FAILED) {
    // TODO - IMPROVE ERROR HANDLING
    return <div>ERROR</div>;
  } else {
    return <div></div>;
  }
};

export default SettingsView;
