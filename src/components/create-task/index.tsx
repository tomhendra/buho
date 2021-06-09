import { ErrorMessage, Button, Spinner } from 'components';
import { Modal, ModalOpenButton, ModalContents, TaskForm } from 'components';
import { useCreateTask } from 'core/hooks';

function CreateTask() {
  const { create, error, isIdle, isLoading, isError, isSuccess } =
    useCreateTask();

  return (
    <Modal>
      <ModalOpenButton>
        <Button variant="primary">Create Project</Button>
      </ModalOpenButton>
      <ModalContents aria-label="Create project form" title="Create Project">
        {isIdle && (
          <TaskForm
            onSubmit={create}
            submitButton={<Button variant="primary">Create Task</Button>}
          />
        )}
        {isLoading ? <Spinner /> : null}
        {isError ? <ErrorMessage error={error as Error} /> : null}
        {isSuccess ? (
          <>
            <p>Project created!</p>
            <p>Go back to Dashboard</p>
          </>
        ) : null}
      </ModalContents>
    </Modal>
  );
}

export { CreateTask };