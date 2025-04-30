import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import styles from './UserProfile.module.scss';

const schema = yup.object().shape({
    name: yup.string().required('Name is required'),
    email: yup.string().email('Invalid email').required('Email is required'),
    password: yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
});

const UserProfile = () => {
    const [preview, setPreview] = useState(null);

    const {
        register,
        handleSubmit,
        setValue,
        formState: { errors },
        reset,
    } = useForm({
        resolver: yupResolver(schema),
    });

    useEffect(() => {
        const storedData = JSON.parse(localStorage.getItem('profileData'));
        if (storedData?.image) {
            setPreview(storedData.image);
        }
    }, []);

    const onImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setPreview(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    const onSubmit = (data) => {
        const profileData = {
            ...data,
            image: preview,
        };

        localStorage.setItem('profileData', JSON.stringify(profileData));
        alert('Bilgiler başarıyla kaydedildi!');

        setPreview(null);
        reset();
    };

    return (
        <div className={styles.container}>
            <label htmlFor="profileImage" className={styles.imageUploadBox}>
                {preview ? (
                    <img src={preview} alt="Profile" className={styles.profileImage} />
                ) : (
                    <div className={styles.placeholder}>+</div>
                )}
            </label>
            <input
                type="file"
                id="profileImage"
                accept="image/*"
                onChange={onImageChange}
                style={{ display: 'none' }}
            />
            <p className={styles.changePhotoText}>Change profile picture</p>

            <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
                <div className={styles.inputGroup}>
                    <label className={styles.label}>Your name</label>
                    <input
                        placeholder="John Doe"
                        {...register('name')}
                        className={styles.input}
                    />
                    <p className={styles.error}>{errors.name?.message}</p>
                </div>

                <div className={styles.inputGroup}>
                    <label className={styles.label}>Email address</label>
                    <input
                        placeholder="abc@def.com"
                        {...register('email')}
                        className={styles.input}
                    />
                    <p className={styles.error}>{errors.email?.message}</p>
                </div>

                <div className={styles.inputGroup}>
                    <label className={styles.label}>Password</label>
                    <input
                        type="password"
                        placeholder="******"
                        {...register('password')}
                        className={styles.input}
                    />
                    <p className={styles.error}>{errors.password?.message}</p>
                </div>

                <button type="submit" className={styles.saveButton}>
                    Save
                </button>
            </form>
        </div>
    );
};

export default UserProfile;