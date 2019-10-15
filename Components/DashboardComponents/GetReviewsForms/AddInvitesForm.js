import React, { Component } from "react";
import FormField from "../../Widgets/FormField/FormField";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import ArrowRight from "@material-ui/icons/KeyboardArrowRight";
export default class AddInvitesForm extends Component {
  handleAddBtnClick = () => {
    let dataToSubmit = {};
    const { formData } = this.props;
    let valid = true;
    for (let item in formData) {
      valid = valid && formData[item].valid;
      dataToSubmit = { ...dataToSubmit, [item]: formData[item].value };
    }
    if (valid) {
      this.props.onAddClick({ ...dataToSubmit });
    }
  };

  renderFormFields = () => {
    const { formData } = this.props;
    let output = [];
    for (let item in formData) {
      output = [
        ...output,
        <div className="col-md-3">
          <FormField
            {...formData[item]}
            id={item}
            handleChange={(e)=>{this.props.handleChange(e,item,"addInvitesData")}}
          />
        </div>
      ];
    }
    return [
      ...output,
      <div className="col-md-3">
        <div style={{display:"flex", justifyContent:"space-between"}}>
          <div>
            <Button
              variant="contained"
              color="primary"
              startIcon={<AddIcon />}
              onClick={this.handleAddBtnClick}
            >
              Add
            </Button>
          </div>
          <div>
            <Button
              variant="contained"
              color="primary"
              endIcon={<ArrowRight />}
              onClick={this.props.onContinueClick}
            >
              Continue
            </Button>
          </div>
        </div>
      </div>
    ];
  };
  render() {
    return (
      <div className="container">
        <style jsx>
            {`
                .red{
                    color:red;
                }
            `}
        </style>
        <div className="row">
            <div className="col-md-3"><h6>Email <sup className="red">*</sup></h6></div>
            <div className="col-md-3"><h6>Name <sup className="red">*</sup></h6></div>
            <div className="col-md-3"><h6>Reference number <sup className="red">*</sup></h6></div>
        </div>
        <div className="row">{this.renderFormFields()}</div>
      </div>
    );
  }
}