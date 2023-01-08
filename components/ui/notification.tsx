import classes from './notification.module.css';

export type NotificationPropsType = {
  notification:{

    title: string;
    message: string;
    status: 'success' | 'error';
  }
};
function Notification(props: NotificationPropsType) {
const { title, message, status } = props.notification
  let statusClasses = '';

  if (status === 'success') {
    statusClasses = classes.success;
  }

  if (status === 'error') {
    statusClasses = classes.error;
  }

  const cssClasses = `${classes.notification} ${statusClasses}`;

  return (
    <div className={cssClasses}>
      <h2>{title}</h2>
      <p>{message}</p>
    </div>
  );
}

export default Notification;
