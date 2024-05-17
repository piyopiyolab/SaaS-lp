import clsx from 'clsx';

function Button({ color }) {
    return (
        <button
            className={clsx(
                'px-4 py-2  rounded-lg shadow-md mx-auto sm:mx-0 block',
                {
                    'text-white bg-purple-500 hover:bg-purple-700': color === 'violet',
                    'text-black bg-yellow-500 hover:bg-yellow-700': color === 'accent',
                }
            )}
        >
            {color === 'signup' ? 'Sign up' : color === 'accent' ? 'Get Started' : 'Button'}
        </button>
    );
}

export default Button;
