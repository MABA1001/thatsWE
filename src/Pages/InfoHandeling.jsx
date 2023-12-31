import * as React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import emailjs from '@emailjs/browser';

const CompanyForm = () => {
  const validationSchema = Yup.object({
    companyName: Yup.string().required('Company Name is required'),
    travelIndustry: Yup.boolean().required('Please select an option'),
    telephone: Yup.string().required('Telephone is required'),
    website: Yup.string().url('Invalid URL').required('Website is required'),
    contactPerson: Yup.string().required('Contact Person Name is required'),
    address: Yup.string().required('Address is required'),
    postalCode: Yup.string().required('Postal Code is required')
  });

  const initialValues = {
    companyName: '',
    travelIndustry: 'false',
    telephone: '',
    website: '',
    contactPerson: '',
    address: '',
    postalCode: ''
  };

  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      setSubmitting(true);
      const response = await emailjs.send(
        'ADD your SEVICE ID HERE ',
        'ADD YOUR TEMPLATE ID HERE',
        {
          contactPerson: values.contactPerson,
          companyName: values.companyName,
          travelIndustry: values.travelIndustry,
          telephone: values.telephone,
          website: values.website,
          address: values.address,
          postalCode: values.postalCode
        },
        'ADD YOUR USER ID HERE OF EMAIL JS'
      );

      console.log('Email sent:', response);
    } catch (error) {
      console.error('Error sending email:', error);
    } finally {
      setSubmitting(false);
    }
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: handleSubmit
  });

  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
      sx={{ backgroundColor: '#E6F7FF', mt: 11 }}
    >
      <Grid item xs={12} sm={8} md={6} lg={4}>
        <Box
          component="form"
          onSubmit={formik.handleSubmit}
          sx={{
            p: 4,
            boxShadow: 4,
            borderRadius: 2,
            bgcolor: 'white',
            mt: 4,
            mb: 4
          }}
        >
          <Typography variant="h5" gutterBottom>
            Company Information
          </Typography>
          <TextField
            fullWidth
            margin="normal"
            label="Company Name"
            name="companyName"
            value={formik.values.companyName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={
              formik.touched.companyName && Boolean(formik.errors.companyName)
            }
            helperText={formik.touched.companyName && formik.errors.companyName}
          />
          <Typography variant="body1" gutterBottom>
            Travel Industry?
          </Typography>
          <RadioGroup
            row
            aria-label="travelIndustry"
            name="travelIndustry"
            value={formik.values.travelIndustry}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          >
            <FormControlLabel value="true" control={<Radio />} label="Yes" />
            <FormControlLabel value="false" control={<Radio />} label="No" />
          </RadioGroup>
          <TextField
            fullWidth
            margin="normal"
            label="Telephone"
            name="telephone"
            value={formik.values.telephone}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.telephone && Boolean(formik.errors.telephone)}
            helperText={formik.touched.telephone && formik.errors.telephone}
          />
          <TextField
            fullWidth
            margin="normal"
            label="Telephone"
            name="telephone"
            value={formik.values.telephone}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.telephone && Boolean(formik.errors.telephone)}
            helperText={formik.touched.telephone && formik.errors.telephone}
          />
          <TextField
            fullWidth
            margin="normal"
            label="Website"
            name="website"
            value={formik.values.website}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.website && Boolean(formik.errors.website)}
            helperText={formik.touched.website && formik.errors.website}
          />
          <TextField
            fullWidth
            margin="normal"
            label="Contact Person"
            name="contactPerson"
            value={formik.values.contactPerson}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={
              formik.touched.contactPerson &&
              Boolean(formik.errors.contactPerson)
            }
            helperText={
              formik.touched.contactPerson && formik.errors.contactPerson
            }
          />
          <TextField
            fullWidth
            margin="normal"
            label="Address"
            name="address"
            value={formik.values.address}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.address && Boolean(formik.errors.address)}
            helperText={formik.touched.address && formik.errors.address}
          />
          <TextField
            fullWidth
            margin="normal"
            label="Postal Code"
            name="postalCode"
            value={formik.values.postalCode}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={
              formik.touched.postalCode && Boolean(formik.errors.postalCode)
            }
            helperText={formik.touched.postalCode && formik.errors.postalCode}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 2 }}
            disabled={formik.isSubmitting || !formik.isValid}
          >
            Submit
          </Button>
        </Box>
      </Grid>
    </Grid>
  );
};

export default CompanyForm;
