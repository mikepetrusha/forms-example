import Button, { Props as ButtonProps } from '~/ui/Button';

export interface Props extends Omit<ButtonProps, 'type'> {}

const SubmitButton = (props: Props) => <Button {...props} type="submit" />;

export default SubmitButton;
