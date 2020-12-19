import one from "./ProfileInfo.module.css";


const ProfileInfo = () => {
    return (
        <div className={one.profile_item}>
            <div>
                <img src={"https://www.traveldailymedia.com/oachugot/2020/01/thailandblogger.jpg"} alt=""/>
            </div>
            <div className={one.profile_ava}>
                Avatar
            </div>
        </div>
    )
};
export default ProfileInfo;