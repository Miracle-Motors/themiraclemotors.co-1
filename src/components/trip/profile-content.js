import React, { createRef } from "react"
// import PropTypes from "prop-types"
import styles from "./trip.module.scss"
import { ProfileForm, Button, WrapperCard } from "../common"
import { Info } from "../../assets/svg"
import cx from "classnames"

const profileFormRef = createRef()

const ProfileContent = ({ onSave, onCancel, user, loading }) => {
  const handleOnSave = e => {
    e.preventDefault()
    const {
      region: { value: region },
      gender: { value: gender },
      address: { value: address },
      kinPhoneNumber: { value: kinPhoneNumber },
      kinFullName: { value: kinFullName },
    } = profileFormRef.current
    return onSave({
      gender,
      address: `${address}${region ? ` ,${region}` : ""}`,
      kinFullName,
      kinPhoneNumber,
    })
  }

  return (
    <div className={styles.ProfileContent}>
      <WrapperCard
        title="Edit your Profile"
        className={styles.ProfileContent__accordion}
      >
        <div className={styles.ProfileContent__info}>
          <Info />
          <p>These details will be used as your default passenger details</p>
        </div>
        <ProfileForm value={user} disableEssentials ref={profileFormRef} />
      </WrapperCard>
      <div className={styles.ProfileContent__button_group}>
        <Button
          onClick={onCancel}
          className={cx(
            styles.ProfileContent__Submit,
            styles.ProfileContent__Submit__cancel
          )}
        >
          Cancel
        </Button>
        <Button
          onClick={handleOnSave}
          className={cx(
            styles.ProfileContent__Submit,
            styles.ProfileContent__Submit__save
          )}
          loading={loading}
        >
          Save
        </Button>
      </div>
    </div>
  )
}

ProfileContent.propTypes = {}

export default ProfileContent
