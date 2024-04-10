import { Divider, Modal, Typography } from '@mui/material';
import { FieldErrors, SubmitHandler, useForm } from 'react-hook-form';
import './profileForm.scss';
import Input from '../../components/Input';
import { useAppDispatch, useAppSelector } from '../../redux/hook';
import { editUsersList } from '../../redux/actions/editUsersList';
import { useState } from 'react';
import BasicModal from '../../components/Modal';
import { isEmpty, isEqual } from 'lodash';

const titleStyles = {
  marginBottom: '16px', fontSize: '24px', fontWeight: 600 
}

const dividerStyles = {
  marginBottom: '16px'
}

const defaultValues = (currentUser: TestAppAPI.User[], id: string|undefined) => {
  return {
    id,
    name: currentUser[0].name,
    username: currentUser[0].username,
    email: currentUser[0].email,
    city: currentUser[0].address?.city
      ? currentUser[0].address?.city
      : currentUser[0].city,
    phone: currentUser[0].phone,
    company: currentUser[0].company?.name
      ? currentUser[0].company.name
      : currentUser[0].company,
  };
};

function ProfileForm({
  currentUser,
  id,
}: {
  currentUser: TestAppAPI.User[];
  id: string|undefined;
}) {
  const [open, setOpen] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm({
    defaultValues: defaultValues(currentUser, id),
  });

  const dispatch = useAppDispatch();

  const onSubmit = (
    data: TestAppAPI.User & any
  ) => {
    dispatch(editUsersList(data));
  };

  const handleButtonClick = () => {
    if (isEmpty(errors)) {
      const changedValues = watch();
      if (!isEqual(changedValues, defaultValues(currentUser, id))) {
        setOpen(true);
      }
    } else {
      console.log('Поля не заполнены');
    }
  }

  return (
    <>
      <BasicModal open={open} setOpen={setOpen} />
      <div className="profileFormContainer">
        <Typography
          sx={titleStyles}
        >
          Данные профиля
        </Typography>
        <Divider sx={dividerStyles} />
        <form onSubmit={handleSubmit(onSubmit)}>
          <Input fieldName={'name'} register={register} errors={errors.name} />
          <Input
            fieldName={'username'}
            register={register}
            errors={errors.username}
          />
          <Input
            fieldName={'email'}
            register={register}
            errors={errors.email}
          />
          <Input fieldName={'city'} register={register} errors={errors.city} />
          <Input
            fieldName={'phone'}
            register={register}
            errors={errors.phone}
          />
          <Input
            fieldName={'company'}
            register={register}
            errors={errors.company}
          />
          <button
            type="submit"
            className="formButton"
            onClick={handleButtonClick}
          >
            Отправить
          </button>
        </form>
      </div>
    </>
  );
}

export default ProfileForm;
