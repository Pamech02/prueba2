import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

const useForm = (initialUrl) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [imageDetails, setImageDetails] = useState(() => {
    const savedDetails = localStorage.getItem('imageDetails');
    return savedDetails ? JSON.parse(savedDetails) : [];
  });

  useEffect(() => {
    localStorage.setItem('imageDetails', JSON.stringify(imageDetails));
  }, [imageDetails]);

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const history = useHistory();

  const handleSubmit = (event) => {
    event.preventDefault();
    const newImageDetail = {
      id: imageDetails.length + 1,
      imageUrl: initialUrl,
      title: title,
      description: description,
    };
    
    // Guardar los datos en localStorage antes de redirigir
    const updatedDetails = [...imageDetails, newImageDetail];
    localStorage.setItem('imageDetails', JSON.stringify(updatedDetails));
    setImageDetails(updatedDetails);

    setTitle('');
    setDescription('');
    history.push('/');
  };

  return {
    title,
    description,
    imageDetails,
    handleTitleChange,
    handleDescriptionChange,
    handleSubmit,
  };
};

export default useForm;


