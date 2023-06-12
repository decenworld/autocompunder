import { makeStyles } from '@material-ui/core';
import type { PropsWithChildren } from 'react';
import React, { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { Button, ButtonLink } from '../../../../components/Button';
import { useAppDispatch, useAppSelector } from '../../../../store';
import { askForWalletConnection, doDisconnectWallet } from '../../../data/actions/wallet';
import { selectWalletAddressIfKnown } from '../../../data/selectors/wallet';
import { Section } from '../../../../components/Section';
import { styles } from './styles';
import iconEmptyState from '../../../../images/empty-state.svg';

const useStyles = makeStyles(styles);

export const NoResults = memo(function NoResults() {
  const walletAddress = useAppSelector(selectWalletAddressIfKnown);

  if (walletAddress) {
    return <NoVaults />;
  }

  return <NotConnected />;
});

type TextProps = PropsWithChildren<{
  text: string;
}>;
const Text = memo<TextProps>(function Text({ text, children }) {
  const { t } = useTranslation();
  const classes = useStyles();
  return (
    <Section>
      <div className={classes.container}>
        <div>
          <img className={classes.icon} src={iconEmptyState} alt="empty" />
        </div>
        <div className={classes.textContainer}>
          <div className={classes.title}>{t('Dashboard-NoData')}</div>
          <div className={classes.text}>{text}</div>
        </div>
        {children}
      </div>
    </Section>
  );
});

const NotConnected = memo(function NotConnected() {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const walletAddress = useAppSelector(selectWalletAddressIfKnown);
  const handleWalletConnect = useCallback(() => {
    if (walletAddress) {
      dispatch(doDisconnectWallet());
    } else {
      dispatch(askForWalletConnection());
    }
  }, [dispatch, walletAddress]);
  return (
    <Text text={t('Dashboard-NoConnected')}>
      <Button onClick={handleWalletConnect} variant="success">
        {t('NoResults-ConnectWallet')}
      </Button>
    </Text>
  );
});

const NoVaults = memo(function NoVaults() {
  const { t } = useTranslation();
  return (
    <Text text={t('Dashboard-NoVaults')}>
      <ButtonLink to="/" variant="success">
        {t('NoResults-ViewAllVaults')}
      </ButtonLink>
    </Text>
  );
});
