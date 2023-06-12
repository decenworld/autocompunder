import React, { memo } from 'react';
import { makeStyles } from '@material-ui/styles';
import { styles } from './styles';
import { useTranslation } from 'react-i18next';
import { useAppSelector } from '../../../../store';
import { selectAllChains } from '../../../data/selectors/chains';
import { Link } from 'react-router-dom';
import logoMultichain from '../../../../images/partners/multichain.png';

const useStyles = makeStyles(styles);
export const Introduction = memo(function Introduction() {
  const classes = useStyles();
  const { t } = useTranslation();
  const chains = useAppSelector(selectAllChains);

  return (
    <div className={classes.container}>
      <h1 className={classes.title}>{t('Bridge-Intro-Title', { chains: chains.length })}</h1>
      <div className={classes.text}>
        {t('Bridge-Intro-Text')
          .split('\n')
          .map((text, i) => {
            return (
              <p key={i}>
                {text} {i === 1 && <Link to="/">{t('Bridge-Intro-Link')}</Link>}
              </p>
            );
          })}
      </div>
      <div className={classes.poweredBy}>
        <div className={classes.poweredByLabel}>{t('OnRamp-Intro-PoweredBy')}</div>
        <div className={classes.poweredByLogos}>
          <img src={logoMultichain} alt={'multichain'} height="32" />
        </div>
      </div>
    </div>
  );
});
