import produce from "immer";
import React, { FC, ReactNode, useState } from "react";
import { Group } from "../Group";
import {
  BooleanToggle,
  ChangeHandler,
  GroupToggle,
  GroupToggleType,
  NumberToggle,
} from "../Toggle";

interface UsersValues extends GroupToggleType {
  add: boolean;
  edit: boolean;
  remove: boolean;
  maxUsers: number;
}

interface AppState {
  general: {
    caseManagement: boolean;
    mapTimeline: boolean;
    viewsAndBriefings: boolean;
    notifications: boolean;
    massCommunications: boolean;
    trafficCameras: boolean;
  };
  settings: {
    auditLog: boolean;
    users?: {
      add: boolean;
      remove: boolean;
      edit: boolean;
      maxUsers: number;
    };
  };
  alerts: {
    alertManager: boolean;
    alertRules: number;
  };
}

const usersRenderer = (
  value: UsersValues | undefined,
  onChange?: ChangeHandler<UsersValues>
): ReactNode => {
  const { add, edit, remove, maxUsers } = value || {
    add: true,
    edit: true,
    remove: true,
    maxUsers: 10,
  };
  return (
    <div>
      <BooleanToggle
        label="Users add"
        value={add}
        onChange={(value) =>
          onChange && onChange({ edit, remove, maxUsers, add: value })
        }
      />
      <BooleanToggle
        label="User remove"
        value={edit}
        onChange={(value) =>
          onChange && onChange({ edit: value, remove, maxUsers, add })
        }
      />
      <BooleanToggle
        label="Users edit"
        value={remove}
        onChange={(value) =>
          onChange && onChange({ edit, remove: value, maxUsers, add })
        }
      />
      <NumberToggle
        onChange={(value) =>
          onChange && onChange({ edit, remove, maxUsers: value, add })
        }
        value={maxUsers}
        label="Max Users"
        options={Array(10)
          .fill(null)
          .map((_, index) => index)}
      />
    </div>
  );
};

export const Application: FC<unknown> = () => {
  const [state, setState] = useState<AppState>({
    general: {
      caseManagement: true,
      mapTimeline: true,
      viewsAndBriefings: true,
      notifications: true,
      massCommunications: true,
      trafficCameras: true,
    },
    settings: {
      auditLog: true,
      users: undefined,
    },
    alerts: {
      alertManager: true,
      alertRules: 10,
    },
  });
  const {
    general: {
      caseManagement,
      mapTimeline,
      viewsAndBriefings,
      notifications,
      massCommunications,
      trafficCameras,
    },
    settings: { auditLog, users },
    alerts: { alertManager, alertRules },
  } = state;
  return (
    <div className="Application">
      <Group label="General">
        <div>
          <BooleanToggle
            label="Case Management"
            value={caseManagement}
            onChange={(value) =>
              setState(
                produce((draft) => {
                  draft.general.caseManagement = value;
                })
              )
            }
          />
          <BooleanToggle
            label="Map Timeline"
            value={mapTimeline}
            onChange={(value) =>
              setState(
                produce((draft) => {
                  draft.general.mapTimeline = value;
                })
              )
            }
          />
          <BooleanToggle
            label="Views &amp; Briefings"
            value={viewsAndBriefings}
            onChange={(value) =>
              setState(
                produce((draft) => {
                  draft.general.viewsAndBriefings = value;
                })
              )
            }
          />
          <BooleanToggle label="Notifications" value={notifications} />
          <BooleanToggle
            label="Mass Communications"
            onChange={(value) =>
              setState(
                produce((draft) => {
                  draft.general.massCommunications = value;
                })
              )
            }
            value={massCommunications}
          />
          <BooleanToggle
            label="Traffic Cameras"
            value={trafficCameras}
            onChange={(value) =>
              setState(
                produce((draft) => {
                  draft.general.trafficCameras = value;
                })
              )
            }
          />
        </div>
      </Group>
      <Group label="Settings">
        <BooleanToggle
          label="Audit Log"
          value={auditLog}
          onChange={(value) =>
            setState(
              produce((draft) => {
                draft.settings.auditLog = value;
              })
            )
          }
        />
        <GroupToggle<UsersValues>
          label="Users"
          value={users}
          onChange={(value) =>
            setState(
              produce((draft) => {
                draft.settings.users = value;
              })
            )
          }
          render={usersRenderer}
        />
      </Group>
      <Group label="Alerts">
        <BooleanToggle
          label="Alert Manager"
          value={alertManager}
          onChange={(value) =>
            setState(
              produce((draft) => {
                draft.alerts.alertManager = value;
              })
            )
          }
        />
        <NumberToggle
          value={alertRules}
          label="Alert Rules"
          onChange={(value) =>
            setState(
              produce((draft) => {
                draft.alerts.alertRules = value;
              })
            )
          }
          options={Array(10)
            .fill(null)
            .map((_, index) => index)}
        />
      </Group>
    </div>
  );
};
