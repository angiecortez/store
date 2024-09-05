function Button({ name }: { name: string }) {
  return (
    <button className='ml-auto py-2 px-4 bg-blue-500 hover:bg-blue-600 text-white rounded-lg'>
      {name}
    </button>
  );
}

export default Button;
