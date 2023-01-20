import KeyboardArrowRightRoundedIcon from "@mui/icons-material/KeyboardArrowRightRounded";
function SubMenuContainer({ name }) {
  return (
    <>
      <div className="sub-menu-container d-flex align-items-center justify-content-between">
        <h3>{name}</h3>
        <div className="view-all d-flex  align-items-center gap-1">
          <p className="m-1">View All</p>
          <KeyboardArrowRightRoundedIcon />
        </div>
      </div>
    </>
  );
}

export { SubMenuContainer };
