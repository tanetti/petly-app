import { PropTypes } from 'prop-types';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Form, ModalInput, Label } from 'components/ModalAddsPet';
import { ModalAddsPetFirstStepFormValidationSchema } from 'utilities/validationSchemas';

export const FirstStepForm = ({
  initialName,
  initialDate,
  initialBreed,
  onSubmit,
}) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: initialName,
      date: initialDate,
      breed: initialBreed,
    },
    mode: 'onChange',
    resolver: yupResolver(ModalAddsPetFirstStepFormValidationSchema),
  });

  return (
    <Form
      id="form-one"
      action="#"
      onSubmit={handleSubmit(data => {
        onSubmit(data, reset);
      })}
    >
      <Label htmlFor="name">Name pet</Label>
      <ModalInput
        id="name"
        type="text"
        name="name"
        placeholder="Type name pet"
        title="Name must be from 2 to 16 characters"
        size="small"
        helperText={errors.name?.message}
        error={errors.name ? true : false}
        {...register('name')}
      />

      <Label htmlFor="date">Date of birth</Label>
      <ModalInput
        id="date"
        type="text"
        name="date"
        placeholder="Type date of birth"
        title="Date must be in DD.MM.YYYY format, 1900-2099 years are acceptable"
        size="small"
        {...register('date')}
        helperText={errors.date?.message}
        error={errors.date ? true : false}
      />

      <Label htmlFor="breed">Breed</Label>
      <ModalInput
        id="breed"
        type="text"
        name="breed"
        placeholder="Type breed"
        title="Breed must be from 2 to 16 characters"
        size="small"
        helperText={errors.breed?.message}
        error={errors.breed ? true : false}
        {...register('breed')}
      />
    </Form>
  );
};

FirstStepForm.propTypes = {
  initialName: PropTypes.string.isRequired,
  initialDate: PropTypes.string.isRequired,
  initialBreed: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
};
