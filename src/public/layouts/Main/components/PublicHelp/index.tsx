import React from 'react'

import './style/styles.sass'
import { UiImage } from '../../../../../core/components/ui-components'
import { UiInput } from '../../../../../core/components/ui-components/Input'

export const PublicHelp = () => {
  return (
    <div className="help-teams">
      <div className="help-teams__interaction">
        <h1 className="help-teams__title">We help teams to be more effective</h1>
        <p className="help-teams__description">
          A complete set of tools for your work: Kanban boards, weekly calendar, task management, flexible
          notifications, and more.
        </p>
        <div className="help-teams__launch">
          <UiInput
            placeholder="Enter your email address"
            type="email"
            width="80%"
            isButton
          />
        </div>
      </div>
      <div className="help-teams__image">
        <UiImage src="helpTeams" width="480px" />
      </div>
    </div>
  )
}
