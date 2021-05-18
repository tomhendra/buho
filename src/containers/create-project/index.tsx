import * as React from 'react';
import { ErrorMessage, Button, Spinner } from 'components';
import { ModalProvider, ModalOpenButton, Modal, ProjectForm } from 'containers';
import { useCreateProject } from 'core/hooks';

function CreateProject() {
  const { create, isIdle, isLoading, isError, isSuccess, error, reset } =
    useCreateProject();

  return (
    <ModalProvider>
      <ModalOpenButton>
        <Button variant="primary">Create Project</Button>
      </ModalOpenButton>
      <Modal
        aria-label="Create project form"
        title="Create Project"
        onClose={reset}
      >
        {isIdle ? (
          <ProjectForm
            onSubmit={create}
            submitButton={<Button variant="primary">Create Project</Button>}
          />
        ) : null}
        {isLoading ? <Spinner /> : null}
        {isError ? <ErrorMessage error={error as Error} /> : null}
        {isSuccess ? (
          <>
            <p>Project created!</p>
            <p>Go back to Dashboard</p>
          </>
        ) : null}
      </Modal>
    </ModalProvider>
  );
}

export { CreateProject };
