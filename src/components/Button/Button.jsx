import clsx from 'clsx';

function Button({ color }) {
    return (
        <button
            className={clsx(
                'px-4 py-2 font-semibold rounded-lg shadow-md',
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
