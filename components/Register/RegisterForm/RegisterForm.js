import React from "react";
import { registerUserApi } from "../../../services/Register.api";
import ButtonLoader from "../../ButtonLoader";
import styles from "./RegisterForm.module.scss";
import toast from "../../../components/Toast";
import {
  ValidateEmail,
  ValidatePassword,
  ValidatePhone,
  ValidateString,
} from "../../../helpers/validators";

class RegisterForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fields: {
        tenantName: "",
        userName: "",
        contactName: "",
        taxId: "",
        phone: "",
        adminEmailAddress: "",
        adminPassword: "",
        adminConfirmPassword: "",
        editionId: props.editionId,
        tierId: props.tierId,
        useSharedDatabase: false,
        isApproved: false,
      },
      errors: {
        tenantName: "",
        userName: "",
        contactName: "",
        taxId: "",
        phone: "",
        adminEmailAddress: "",
        adminPassword: "",
        adminConfirmPassword: "",
      },
      loader: false,
      registerForm: props.registerForm,
    };
  }

  componentDidUpdate(newProps) {
    const { registerForm } = this.setState;
    if (
      registerForm &&
      registerForm.labels &&
      registerForm.labels.tenantName !== registerForm.labels.tenantName
    )
      this.setState({ registerForm: newProps.registerForm });
  }

  validate = (name, value) => {
    const { fields, registerForm } = this.state;
    const validationMsg = registerForm.validationMsg;
    switch (name) {
      case "tenantName":
        return ValidateString(value, validationMsg.nameIsRequired);
      case "userName":
        return ValidateString(value, validationMsg.userName);
      case "contactName":
        return ValidateString(value, validationMsg.ContactNameIsRequired);
      case "taxId":
        return ValidateString(value, validationMsg.taxId);
      case "adminEmailAddress":
        return ValidateEmail(value, [
          validationMsg.emailIsRequired,
          validationMsg.emailIsNotValid,
        ]);
      case "phone":
        return ValidatePhone(
          value,
          validationMsg.phoneIsRequired,
          validationMsg.validPhoneNumber
        );
      case "adminPassword":
        return ValidatePassword(
          value,
          validationMsg.passwordIsRequired,
          validationMsg.atLeast8Character,
          validationMsg.atLeastLowerCharacter,
          validationMsg.atLeastUpperCharacter,
          validationMsg.atLeastOneDigit
        );
      case "adminConfirmPassword":
        if (!value) {
          return validationMsg.confirmPassword;
        } else if (value !== fields.adminPassword) {
          return validationMsg.confirmPasswordIsNotMatched;
        } else {
          return "";
        }
      default: {
        return "";
      }
    }
  };

  handleUserInput = (e) => {
    this.setState({
      errors: {
        ...this.state.errors,
        [e.target.name]: this.validate(e.target.name, e.target.value),
      },
      fields: {
        ...this.state.fields,
        [e.target.name]: e.target.value,
      },
    });
  };

  handleSubmit = async (e) => {
    const { fields } = this.state;
    e.preventDefault();
    this.setState({ loader: true });
    let validationErrors = {};
    Object.keys(fields).forEach((name) => {
      const error = this.validate(name, fields[name]);
      if (error && error.length > 0) {
        validationErrors[name] = error;
        this.setState({ loader: false });
      }
    });
    if (Object.keys(validationErrors).length > 0) {
      this.setState({ errors: validationErrors });
      this.setState({ loader: false });
      return;
    }
    if (
      fields.tenantName &&
      fields.adminEmailAddress &&
      fields.userName &&
      fields.phone &&
      fields.adminPassword &&
      fields.adminConfirmPassword &&
      fields.taxId &&
      fields.contactName
    ) {
      const data = {
        ...fields,
      };
      try {
        const sendUser = await registerUserApi(data);
        this.setState({ loader: false });
        toast({
          type: "success",
          message: "Congratulations, you have registered successfully",
        });
        setTimeout(() => {
          window.open(
            "https://fawateer.azurewebsites.net/Account/Login",
            "_blank"
          );
        }, 1000);
      } catch (err) {
        this.setState({ loader: false });
        throw console.log(err);
      }
    }
  };

  render() {
    const { fields, errors, registerForm } = this.state;
    return (
      <div className={styles.formWrap}>
        <div className={styles.formGroup}>
          <label className={styles.label}>
            {registerForm.labels.tenantName}{" "}
            <span className={styles.required}>*</span>
          </label>
          <input
            type="text"
            name="tenantName"
            value={fields.tenantName}
            onChange={(event) => this.handleUserInput(event)}
            className={`${styles.input}`}
          />
          <div>
            <span className={styles.textDanger}>{errors.tenantName}</span>
          </div>
        </div>
        <div className={styles.formGroup}>
          <label className={styles.label}>
            {registerForm.labels.userName}{" "}
            <span className={styles.required}>*</span>
          </label>
          <input
            type="text"
            name="userName"
            value={fields.userName}
            onChange={(event) => this.handleUserInput(event)}
            className={styles.input}
          />
          <div>
            <span className={styles.textDanger}>{errors.userName}</span>
          </div>
        </div>
        <div className={styles.formGroup}>
          <label className={styles.label}>
            {registerForm.labels.email}{" "}
            <span className={styles.required}>*</span>
          </label>
          <input
            name="adminEmailAddress"
            type="email"
            value={fields.adminEmailAddress}
            onChange={(event) => this.handleUserInput(event)}
            className={styles.input}
          />
          <div>
            <span className={styles.textDanger}>
              {errors.adminEmailAddress}
            </span>
          </div>
        </div>

        <div className={styles.formGroup}>
          <label className={styles.label}>
            {registerForm.labels.contactName}{" "}
            <span className={styles.required}>*</span>
          </label>
          <input
            name="contactName"
            type="text"
            value={fields.contactName}
            onChange={(event) => this.handleUserInput(event)}
            className={styles.input}
            required
          />
          <div>
            <span className={styles.textDanger}>{errors.contactName}</span>
          </div>
        </div>
        <div className={styles.formGroup}>
          <label className={styles.label}>
            {registerForm.labels.phone}{" "}
            <span className={styles.required}>*</span>
          </label>
          <input
            name="phone"
            value={fields.phone}
            onChange={(event) => this.handleUserInput(event)}
            type="tel"
            className={styles.input}
          />
          <div>
            <span className={styles.textDanger}>{errors.phone}</span>
          </div>
        </div>
        <div className={styles.formGroup}>
          <label className={styles.label}>
            {registerForm.labels.taxId}{" "}
            <span className={styles.required}>*</span>
          </label>
          <input
            name="taxId"
            value={fields.taxId}
            onChange={(event) => this.handleUserInput(event)}
            type="text"
            className={styles.input}
            required
          />
          <div>
            <span className={styles.textDanger}>{errors.taxId}</span>
          </div>
        </div>

        <div className={styles.formGroup}>
          <label className={styles.label}>
            {registerForm.labels.password}{" "}
            <span className={styles.required}>*</span>
          </label>
          <input
            name="adminPassword"
            type="password"
            value={fields.adminPassword}
            onChange={(event) => this.handleUserInput(event)}
            className={styles.input}
            required
          />
          <div>
            <span className={styles.textDanger}>{errors.adminPassword}</span>
          </div>
        </div>
        <div className={styles.formGroup}>
          <label className={styles.label}>
            {registerForm.labels.confirmPassword}{" "}
            <span className={styles.required}>*</span>
          </label>
          <input
            name="adminConfirmPassword"
            type="password"
            value={fields.adminConfirmPassword}
            onChange={(event) => this.handleUserInput(event)}
            className={styles.input}
            required
          />
          <div>
            <span className={styles.textDanger}>
              {errors.adminConfirmPassword}
            </span>
          </div>
        </div>
        <ButtonLoader
          loading={this.state.loader}
          fetchData={this.handleSubmit}
          title={registerForm.signUp}
        ></ButtonLoader>
      </div>
    );
  }
}
export default RegisterForm;
