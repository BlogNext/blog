import { useCallback, useRef } from 'react';

const useLogin = () => {
  const ref = useRef<HTMLDialogElement>(null);
  const showLogin = () => {
    ref.current?.showModal();
  };

  const hideLogin = () => {
    ref.current?.close();
  };

  const renderLogin = useCallback(
    () => (
      <dialog ref={ref} className='modal'>
        <div className='modal-box'>
          <h3 className='text-lg font-bold'>Hello!</h3>
          <p className='py-4'>Press ESC key or click the button below to close</p>
          <div className='modal-action'>
            <form method='dialog'>
              {/* if there is a button in form, it will close the modal */}
              <button className='btn'>Close</button>
            </form>
          </div>
        </div>
      </dialog>
    ),
    []
  );

  return {
    renderLogin,
    showLogin,
    hideLogin
  };
};

export default useLogin;
