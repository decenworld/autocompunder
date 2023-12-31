import { memo } from 'react';
import type { TooltipProps } from './Tooltip';
import { Tooltip } from './Tooltip';
import type { SvgIconComponent } from '@material-ui/icons';
import { HelpOutline } from '@material-ui/icons';
import type { SvgIconProps } from '@material-ui/core/SvgIcon/SvgIcon';

export type IconWithTooltipProps = {
  Icon?: SvgIconComponent;
  iconProps?: SvgIconProps;
} & Omit<TooltipProps, 'children'>;

export const IconWithTooltip = memo<IconWithTooltipProps>(function IconWithTooltip({
  Icon = HelpOutline,
  iconProps,
  ...rest
}) {
  return (
    <Tooltip {...rest}>
      <Icon {...iconProps} />
    </Tooltip>
  );
});
