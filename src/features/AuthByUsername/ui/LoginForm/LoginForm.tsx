import { getLoginError, getLoginLoading, getLoginPassword, getLoginUsername } from '../../model/selectors';
import { loginActions, loginReducer } from '../../model/slice/loginSlice';
import { loginByUsername } from '../../model/services/loginByUsername/loginByUsername';
import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { classNames } from 'shared/lib';
import { Button, ButtonTheme, Input, Text, TextTheme } from 'shared/ui';
import cls from './LoginForm.module.scss';
import { DynamicModuleLoader, type ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';

export interface LoginFormProps {
  className?: string
  onSuccess: () => void
}

const initialReducers: ReducersList = {
  loginForm: loginReducer
};

const LoginForm = memo(({ className, onSuccess }: LoginFormProps) => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const username = useSelector(getLoginUsername);
  const password = useSelector(getLoginPassword);
  const isLoading = useSelector(getLoginLoading);
  const error = useSelector(getLoginError);

  const onChangeUsername = useCallback((value?: string) => {
    dispatch(loginActions.setUsername(value ?? ''));
  }, [dispatch]);

  const onChangePassword = useCallback((value?: string) => {
    dispatch(loginActions.setPassword(value ?? ''));
  }, [dispatch]);

  const onLoginClick = useCallback(async () => {
    const result = await dispatch(loginByUsername({ username, password }));
    if (result.meta.requestStatus === 'fulfilled') {
      onSuccess();
    }
  }, [dispatch, username, password, onSuccess]);

  return (
    <DynamicModuleLoader reducers={initialReducers}>
      <div className={classNames(cls.loginForm, {}, [className])}>
        <Text title={t('Форма авторизации')} />
        {Boolean(error) && <Text text={error} theme={TextTheme.ERROR} />}
        <Input
          autoFocus
          className={cls.input}
          onChange={onChangeUsername}
          placeholder={t('Введите username')}
          value={username}
        />
        <Input
          className={cls.input}
          onChange={onChangePassword}
          placeholder={t('Введите пароль')}
          value={password}
        />
        <Button
          theme={ButtonTheme.OUTLINE}
          className={cls.loginBtn}
          onClick={onLoginClick}
          disabled={isLoading}
        >
          {t('Войти')}
        </Button>
      </div>
    </DynamicModuleLoader>
  );
});

export default LoginForm;
