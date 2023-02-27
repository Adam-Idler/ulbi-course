import { getLoginError, getLoginLoading, getLoginPassword, getLoginUsername } from '../../model/selectors';
import { loginActions, loginReducer } from '../../model/slice/loginSlice';
import { loginByUsername } from '../../model/services/loginByUsername/loginByUsername';
import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { classNames } from 'shared/lib';
import { Button, ButtonTheme, Input, Text, TextTheme } from 'shared/ui';
import cls from './LoginForm.module.scss';
import { DynamicModuleLoader, type ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';

export interface LoginFormProps {
  className?: string
}

const initialReducers: ReducersList = {
  loginForm: loginReducer
};

const LoginForm = memo(({ className = '' }: LoginFormProps) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const username = useSelector(getLoginUsername);
  const password = useSelector(getLoginPassword);
  const isLoading = useSelector(getLoginLoading);
  const error = useSelector(getLoginError);

  const onChangeUsername = useCallback((value: string) => {
    dispatch(loginActions.setUsername(value));
  }, [dispatch]);

  const onChangePassword = useCallback((value: string) => {
    dispatch(loginActions.setPassword(value));
  }, [dispatch]);

  const onLoginClick = useCallback(() => {
    dispatch(loginByUsername({ username, password }));
  }, [dispatch, username, password]);

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
