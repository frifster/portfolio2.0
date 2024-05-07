import {useState} from 'react';

type AlertState = {
    show: boolean;
    text: string;
    type: 'success' | 'danger';
};

const useAlert = () => {
    const [alert, setAlert] = useState<AlertState>({show: false, text: '', type: 'danger'});

    const showAlert = ({text, type = 'danger'}: {
        text: string;
        type?: 'success' | 'danger';
    }) => setAlert({show: true, text, type});
    const hideAlert = () => setAlert({show: false, text: '', type: 'danger'});

    return {alert, showAlert, hideAlert};
};

export default useAlert;