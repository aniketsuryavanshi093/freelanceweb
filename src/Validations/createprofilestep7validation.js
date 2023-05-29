import * as Yup from 'yup';

export const createprofilestep7validation = (countryCode) => {
  const regexPatternForPhone = new RegExp(`^[0-9]{${countryCode}}$`);
  return Yup.object({
    country: Yup.string().required('This field is required'),
    phoneNumber: Yup.string()
      .matches(regexPatternForPhone, 'Invalid phone number')
      .required('This field is required')
  });
};
