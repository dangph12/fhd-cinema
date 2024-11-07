// import React, { useState, useEffect, useContext } from 'react'
// import { Modal, Form, Button } from 'react-bootstrap'
// import { NewsContext } from '../context/NewsContext'
// import TextEditor from '../../common/TextEditor'
// import uploadToS3 from '../../common/UploadToS3'

// function CreateNewsModal({ show, fetchNews, onHide }) {
//   const { state } = useContext(NewsContext)
//   const [createShow, setCreateShow] = useState(false)

//   useEffect(() => {
//     setCreateShow(show)
//   }, [show])

//   const [form, setForm] = useState({
//     newsTitle: '',
//     newsDescription: '',
//     newsCreateAt: '',
//     newsImageUrl: '',
//     newsCategoryId: '',
//   })
//   const [validated, setValidated] = useState(false)
//   const [errors, setErrors] = useState({})
//   const [imageFile, setImageFile] = useState(null)

//   const setField = (field, value) => {
//     setForm({
//       ...form,
//       [field]: value,
//     })
//   }

//   const closeCreateShow = () => {
//     onHide()
//     setCreateShow(false)
//     setForm({
//       newsTitle: '',
//       newsDescription: '',
//       newsCreateAt: '',
//       newsImageUrl: '',
//       newsCategoryId: '',
//     })
//     setValidated(false)
//     setErrors({})
//     setImageFile(null)
//   }

//   const validateForm = () => {
//     const newErrors = {}
//     if (form.newsTitle === '') {
//       newErrors.newsTitle = 'Title is required'
//     }
//     if (form.newsDescription === '') {
//       newErrors.newsDescription = 'Description is required'
//     }
//     if (form.newsCreateAt === '') {
//       newErrors.newsCreateAt = 'Create at is required'
//     }
//     if (imageFile === null) {
//       newErrors.newsImageUrl = 'Image is required'
//     }
//     if (form.newsCategoryId === '') {
//       newErrors.newsCategoryId = 'Category is required'
//     }
//     return newErrors
//   }

//   const finishForm = async () => {
//     const date = new Date();
//     const dateStr = `${date.getFullYear()}-${(date.getMonth() + 1).toString().padStart(2, '0')}-${date.getDate().toString().padStart(2, '0')}T00:00:00`;
//     form.newsCreateAt = dateStr;
    
//     if (imageFile) {
//       const imageUrl = await uploadToS3('news', imageFile);
//       form.newsImageUrl = imageUrl;
//     }
//   };

//   const createNews = async () => {
//     fetch('http://localhost:8080/news', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(form),
//     })
//       .then((response) => {
//         if (response.ok) {
//           fetchNews()
//         } else {
//           console.error('Failed to create the news')
//         }
//       })
//       .catch((error) => {
//         console.error('Error:', error)
//       })
//   }

//   const handleCreate = async (e) => {
//     e.preventDefault()

//     await finishForm()
//     console.log(form) 
//     debugger

//     const newErrors = validateForm()
//     if (Object.keys(newErrors).length > 0) {
//       setErrors(newErrors)
//       e.stopPropagation()
//     } else {
//       await createNews()
//       closeCreateShow()
//     }
//   }
//   return (
//     <Modal show={createShow} onHide={() => closeCreateShow()}>
//       <Modal.Header closeButton>
//         <Modal.Title>Create Modal</Modal.Title>
//       </Modal.Header>
//       <Modal.Body>
//         <Form noValidate validated={validated} onSubmit={handleCreate} id="createForm">
//           <Form.Group controlId="formNewsTitle" className="m-2">
//             <Form.Label>Title</Form.Label>
//             <Form.Control
//               type="text"
//               placeholder="Enter title"
//               value={form.newsTitle}
//               onChange={(e) => setField('newsTitle', e.target.value)}
//               isInvalid={!!errors.newsTitle}
//             />
//             <Form.Control.Feedback type="invalid">{errors.newsTitle}</Form.Control.Feedback>
//           </Form.Group>
//           <Form.Group className="m-2">
//             <Form.Label>News description</Form.Label>
//             <TextEditor object="news" description={form.newsDescription} field="newsDescription" setField={setField} />
//           </Form.Group>
//           <Form.Group className="m-2">
//             <Form.Label>News Image</Form.Label>
//             <Form.Control type="file" accept="image/*" onChange={(e) => setImageFile(e.target.files[0])} isInvalid={!!errors.newsImageUrl} />
//             <Form.Control.Feedback type="invalid">{errors.newsImageUrl}</Form.Control.Feedback>
//           </Form.Group>
//           <Form.Group controlId="formNewsCategoryId" className="m-2">
//             <Form.Label>Category</Form.Label>
//             <Form.Select
//               required
//               name="newsCategoryId"
//               onChange={(e) => setField('newsCategoryId', e.target.value)}
//               className="bg-body text-dark border-secondary"
//               value={form.newsCategoryId}
//               isInvalid={!!errors.newsCategoryId}>
//               <option value="">Select news category </option>
//               {state.newsCategories.map((newsCategory) => (
//                 <option key={newsCategory.newsCategoryId} value={newsCategory.newsCategoryId}>
//                   {newsCategory.newsCategoryName}
//                 </option>
//               ))}
//             </Form.Select>
//             <Form.Control.Feedback type="invalid">{errors.newsCategoryId}</Form.Control.Feedback>
//           </Form.Group>
//         </Form>
//       </Modal.Body>
//       <Modal.Footer>
//         <Button variant="secondary" onClick={() => closeCreateShow()}>
//           Close
//         </Button>
//         <Button type="submit" variant="primary" form="createForm">
//           Save Changes
//         </Button>
//       </Modal.Footer>
//     </Modal>
//   )
// }

// export default CreateNewsModal


// import React, { useState, useEffect, useContext } from 'react';
// import { Modal, Form, Button } from 'react-bootstrap';
// import { NewsContext } from '../context/NewsContext';
// import TextEditor from '../../common/TextEditor';
// import uploadToS3 from '../../common/UploadToS3';

// function CreateNewsModal({ show, fetchNews, onHide }) {
//   const { state } = useContext(NewsContext);
//   const [createShow, setCreateShow] = useState(false);

//   useEffect(() => {
//     setCreateShow(show);
//   }, [show]);

//   const [form, setForm] = useState({
//     newsTitle: '',
//     newsDescription: '',
//     newsCreateAt: '',
//     newsImageUrl: '',
//     newsCategoryId: '',
//   });
//   const [validated, setValidated] = useState(false);
//   const [errors, setErrors] = useState({});
//   const [imageFile, setImageFile] = useState(null);

//   const setField = (field, value) => {
//     setForm({
//       ...form,
//       [field]: value,
//     });
//   };

//   const closeCreateShow = () => {
//     onHide();
//     setCreateShow(false);
//     setForm({
//       newsTitle: '',
//       newsDescription: '',
//       newsCreateAt: '',
//       newsImageUrl: '',
//       newsCategoryId: '',
//     });
//     setValidated(false);
//     setErrors({});
//     setImageFile(null);
//   };

//   // Form validation
//   const validateForm = () => {
//     const newErrors = {};
//     if (!form.newsTitle) newErrors.newsTitle = 'Title is required';
//     if (!form.newsDescription) newErrors.newsDescription = 'Description is required';
//     if (!form.newsCreateAt) newErrors.newsCreateAt = 'Creation date is required';
//     if (!imageFile) newErrors.newsImageUrl = 'Image is required';
//     if (!form.newsCategoryId) newErrors.newsCategoryId = 'Category is required';
//     return newErrors;
//   };

//   // Finalizing the form before submission, uploading image to S3, and setting date
//   const finishForm = async () => {
//     // Set current date as newsCreateAt
//     const date = new Date();
//     const dateStr = `${date.getFullYear()}-${(date.getMonth() + 1)
//       .toString()
//       .padStart(2, '0')}-${date.getDate().toString().padStart(2, '0')}T00:00:00`;
//     form.newsCreateAt = dateStr;

//     // Upload image to S3
//     if (imageFile) {
//       try {
//         const imageUrl = await uploadToS3('news', imageFile); // Assumed this function uploads the image and returns the URL
//         form.newsImageUrl = imageUrl;
//       } catch (error) {
//         console.error('Error uploading image:', error);
//         setErrors({ ...errors, newsImageUrl: 'Failed to upload image' });
//         return false;
//       }
//     }
//     return true;
//   };

//   // Create news via API call
//   const createNews = async () => {
//     try {
//       const response = await fetch('http://localhost:8080/news', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(form),
//       });
//       if (response.ok) {
//         fetchNews(); // Re-fetch the news list
//         closeCreateShow(); // Close the modal
//       } else {
//         console.error('Failed to create the news');
//       }
//     } catch (error) {
//       console.error('Error creating news:', error);
//     }
//   };

//   // Handle create form submission
//   const handleCreate = async (e) => {
//     e.preventDefault();
//     setValidated(true);
//     const newErrors = validateForm();
//     if (Object.keys(newErrors).length > 0) {
//       setErrors(newErrors);
//       return;
//     }
//     const isReady = await finishForm();
//     if (isReady) {
//       createNews();
//     }
//   };

//   return (
//     <Modal show={createShow} onHide={closeCreateShow}>
//       <Modal.Header closeButton>
//         <Modal.Title>Create News</Modal.Title>
//       </Modal.Header>
//       <Modal.Body>
//         <Form noValidate validated={validated} onSubmit={handleCreate} id="createForm">
//           <Form.Group controlId="formNewsTitle" className="m-2">
//             <Form.Label>Title</Form.Label>
//             <Form.Control
//               type="text"
//               placeholder="Enter title"
//               value={form.newsTitle}
//               onChange={(e) => setField('newsTitle', e.target.value)}
//               isInvalid={!!errors.newsTitle}
//             />
//             <Form.Control.Feedback type="invalid">{errors.newsTitle}</Form.Control.Feedback>
//           </Form.Group>

//           <Form.Group className="m-2">
//             <Form.Label>News Description</Form.Label>
//             <TextEditor
//               object="news"
//               description={form.newsDescription}
//               field="newsDescription"
//               setField={setField}
//             />
//           </Form.Group>

//           <Form.Group className="m-2">
//             <Form.Label>News Image</Form.Label>
//             <Form.Control
//               type="file"
//               accept="image/*"
//               onChange={(e) => setImageFile(e.target.files[0])}
//               isInvalid={!!errors.newsImageUrl}
//             />
//             <Form.Control.Feedback type="invalid">{errors.newsImageUrl}</Form.Control.Feedback>
//           </Form.Group>

//           <Form.Group controlId="formNewsCategoryId" className="m-2">
//             <Form.Label>Category</Form.Label>
//             <Form.Select
//               required
//               name="newsCategoryId"
//               onChange={(e) => setField('newsCategoryId', e.target.value)}
//               className="bg-body text-dark border-secondary"
//               value={form.newsCategoryId}
//               isInvalid={!!errors.newsCategoryId}
//             >
//               <option value="">Select news category</option>
//               {state.newsCategories.map((newsCategory) => (
//                 <option key={newsCategory.newsCategoryId} value={newsCategory.newsCategoryId}>
//                   {newsCategory.newsCategoryName}
//                 </option>
//               ))}
//             </Form.Select>
//             <Form.Control.Feedback type="invalid">{errors.newsCategoryId}</Form.Control.Feedback>
//           </Form.Group>
//         </Form>
//       </Modal.Body>
//       <Modal.Footer>
//         <Button variant="secondary" onClick={closeCreateShow}>
//           Close
//         </Button>
//         <Button type="submit" variant="primary" form="createForm">
//           Save Changes
//         </Button>
//       </Modal.Footer>
//     </Modal>
//   );
// }

// export default CreateNewsModal;


// import React, { useState, useEffect, useContext } from 'react';
// import { Modal, Form, Button } from 'react-bootstrap';
// import { NewsContext } from '../context/NewsContext';
// import TextEditor from '../../common/TextEditor';
// import uploadToS3 from '../../common/UploadToS3';

// function CreateNewsModal({ show, fetchNews, onHide }) {
//   const { state } = useContext(NewsContext);
//   const [createShow, setCreateShow] = useState(false);

//   useEffect(() => {
//     setCreateShow(show);
//   }, [show]);

//   const [form, setForm] = useState({
//     newsTitle: '',
//     newsDescription: '',
//     newsCreateAt: '',
//     newsImageUrl: '',
//     newsCategoryId: '',
//   });
//   const [validated, setValidated] = useState(false);
//   const [errors, setErrors] = useState({});
//   const [imageFile, setImageFile] = useState(null);

//   const setField = (field, value) => {
//     setForm({
//       ...form,
//       [field]: value,
//     });
//   };

//   const closeCreateShow = () => {
//     onHide();
//     setCreateShow(false);
//     setForm({
//       newsTitle: '',
//       newsDescription: '',
//       newsCreateAt: '',
//       newsImageUrl: '',
//       newsCategoryId: '',
//     });
//     setValidated(false);
//     setErrors({});
//     setImageFile(null);
//   };

//   // Form validation
//   const validateForm = () => {
//     const newErrors = {};
//     if (!form.newsTitle) newErrors.newsTitle = 'Title is required';
//     if (!form.newsDescription) newErrors.newsDescription = 'Description is required';
//     if (!form.newsCreateAt) newErrors.newsCreateAt = 'Creation date is required';
//     if (!imageFile) newErrors.newsImageUrl = 'Image is required';
//     if (!form.newsCategoryId) newErrors.newsCategoryId = 'Category is required';
//     return newErrors;
//   };

//   // Finalize the form before submission, upload the image to S3 and set creation date
//   const finishForm = async () => {
//     const date = new Date();
//     const dateStr = `${date.getFullYear()}-${(date.getMonth() + 1)
//       .toString()
//       .padStart(2, '0')}-${date.getDate().toString().padStart(2, '0')}T00:00:00`;
//     form.newsCreateAt = dateStr;

//     console.log("Uploading image to S3...");
//     if (imageFile) {
//       try {
//         const imageUrl = await uploadToS3('news', imageFile);
//         form.newsImageUrl = imageUrl;
//         console.log("Image successfully uploaded:", imageUrl);
//       } catch (error) {
//         console.error('Error uploading image:', error);
//         setErrors({ ...errors, newsImageUrl: 'Failed to upload image' });
//         return false;
//       }
//     } else {
//       console.error('Image file is missing!');
//     }

//     console.log("Form after image upload:", form);
//     return true;
//   };

//   // Create news via API call
//   const createNews = async () => {
//     console.log("Submitting form to create news:", form);
//     try {
//       const response = await fetch('http://localhost:8080/news', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(form),
//       });

//       if (response.ok) {
//         const data = await response.json();
//         console.log("News successfully created:", data);
//         await fetchNews(); // Re-fetch the news list
//         closeCreateShow(); // Close the modal
//       } else {
//         console.error('Failed to create the news', response.statusText);
//       }
//     } catch (error) {
//       console.error('Error creating news:', error);
//     }
//   };

//   // Handle create form submission
//   const handleCreate = async (e) => {
//     e.preventDefault();
//     setValidated(true);

//     const newErrors = validateForm();
//     if (Object.keys(newErrors).length > 0) {
//       console.log("Validation errors:", newErrors);
//       setErrors(newErrors);
//       return;
//     }

//     const isReady = await finishForm();
//     if (isReady) {
//       await createNews(); // Call the create news function
//     }
//   };

//   return (
//     <Modal show={createShow} onHide={closeCreateShow}>
//       <Modal.Header closeButton>
//         <Modal.Title>Create News</Modal.Title>
//       </Modal.Header>
//       <Modal.Body>
//         <Form noValidate validated={validated} onSubmit={handleCreate} id="createForm">
//           <Form.Group controlId="formNewsTitle" className="m-2">
//             <Form.Label>Title</Form.Label>
//             <Form.Control
//               type="text"
//               placeholder="Enter title"
//               value={form.newsTitle}
//               onChange={(e) => setField('newsTitle', e.target.value)}
//               isInvalid={!!errors.newsTitle}
//             />
//             <Form.Control.Feedback type="invalid">{errors.newsTitle}</Form.Control.Feedback>
//           </Form.Group>

//           <Form.Group className="m-2">
//             <Form.Label>News Description</Form.Label>
//             <TextEditor
//               object="news"
//               description={form.newsDescription}
//               field="newsDescription"
//               setField={setField}
//             />
//           </Form.Group>

//           <Form.Group className="m-2">
//             <Form.Label>News Image</Form.Label>
//             <Form.Control
//               type="file"
//               accept="image/*"
//               onChange={(e) => setImageFile(e.target.files[0])}
//               isInvalid={!!errors.newsImageUrl}
//             />
//             <Form.Control.Feedback type="invalid">{errors.newsImageUrl}</Form.Control.Feedback>
//           </Form.Group>

//           <Form.Group controlId="formNewsCategoryId" className="m-2">
//             <Form.Label>Category</Form.Label>
//             <Form.Select
//               required
//               name="newsCategoryId"
//               onChange={(e) => setField('newsCategoryId', e.target.value)}
//               className="bg-body text-dark border-secondary"
//               value={form.newsCategoryId}
//               isInvalid={!!errors.newsCategoryId}
//             >
//               <option value="">Select news category</option>
//               {state.newsCategories.map((newsCategory) => (
//                 <option key={newsCategory.newsCategoryId} value={newsCategory.newsCategoryId}>
//                   {newsCategory.newsCategoryName}
//                 </option>
//               ))}
//             </Form.Select>
//             <Form.Control.Feedback type="invalid">{errors.newsCategoryId}</Form.Control.Feedback>
//           </Form.Group>
//         </Form>
//       </Modal.Body>
//       <Modal.Footer>
//         <Button variant="secondary" onClick={closeCreateShow}>
//           Close
//         </Button>
//         <Button type="submit" variant="primary" form="createForm">
//           Save Changes
//         </Button>
//       </Modal.Footer>
//     </Modal>
//   );
// }

// export default CreateNewsModal;

// import React, { useState, useEffect, useContext } from 'react';
// import { Modal, Form, Button } from 'react-bootstrap';
// import { NewsContext } from '../context/NewsContext';
// import TextEditor from '../../common/TextEditor';
// import uploadToS3 from '../../common/UploadToS3';

// function CreateNewsModal({ show, fetchNews, onHide }) {
//   const { state } = useContext(NewsContext);
//   const [createShow, setCreateShow] = useState(false);

//   useEffect(() => {
//     setCreateShow(show);
//   }, [show]);

//   const [form, setForm] = useState({
//     newsTitle: '',
//     newsDescription: '',
//     newsCreateAt: '',
//     newsImageUrl: '',
//     newsCategoryId: '',
//   });
//   const [validated, setValidated] = useState(false);
//   const [errors, setErrors] = useState({});
//   const [imageFile, setImageFile] = useState(null);

//   const setField = (field, value) => {
//     setForm({
//       ...form,
//       [field]: value,
//     });
//   };

//   const closeCreateShow = () => {
//     onHide();
//     setCreateShow(false);
//     setForm({
//       newsTitle: '',
//       newsDescription: '',
//       newsCreateAt: '',
//       newsImageUrl: '',
//       newsCategoryId: '',
//     });
//     setValidated(false);
//     setErrors({});
//     setImageFile(null);
//   };

//   // Form validation
//   const validateForm = () => {
//     const newErrors = {};
//     if (!form.newsTitle) newErrors.newsTitle = 'Title is required';
//     if (!form.newsDescription) newErrors.newsDescription = 'Description is required';
//     if (!form.newsCreateAt) newErrors.newsCreateAt = 'Creation date is required';
//     if (!imageFile) newErrors.newsImageUrl = 'Image is required';
//     if (!form.newsCategoryId) newErrors.newsCategoryId = 'Category is required';
//     return newErrors;
//   };

//   // Finalize the form before submission, upload the image to S3 and set creation date
//   const finishForm = async () => {
//     // Upload image to S3
//     if (imageFile) {
//       try {
//         const imageUrl = await uploadToS3('news', imageFile);
//         form.newsImageUrl = imageUrl;
//         console.log("Image successfully uploaded:", imageUrl);
//       } catch (error) {
//         console.error('Error uploading image:', error);
//         setErrors({ ...errors, newsImageUrl: 'Failed to upload image' });
//         return false;
//       }
//     } else {
//       console.error('Image file is missing!');
//     }

//     console.log("Form after image upload:", form);
//     return true;
//   };

//   // Create news via API call
//   const createNews = async () => {
//     console.log("Submitting form to create news:", form);
//     try {
//       const response = await fetch('http://localhost:8080/news', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(form),
//       });

//       if (response.ok) {
//         const data = await response.json();
//         console.log("News successfully created:", data);
//         await fetchNews(); // Re-fetch the news list
//         closeCreateShow(); // Close the modal
//       } else {
//         console.error('Failed to create the news', response.statusText);
//       }
//     } catch (error) {
//       console.error('Error creating news:', error);
//     }
//   };

//   // Handle create form submission
//   const handleCreate = async (e) => {
//     e.preventDefault();
//     setValidated(true);

//     const newErrors = validateForm();
//     if (Object.keys(newErrors).length > 0) {
//       console.log("Validation errors:", newErrors);
//       setErrors(newErrors);
//       return;
//     }

//     const isReady = await finishForm();
//     if (isReady) {
//       await createNews(); // Call the create news function
//     }
//   };

//   return (
//     <Modal show={createShow} onHide={closeCreateShow}>
//       <Modal.Header closeButton>
//         <Modal.Title>Create News</Modal.Title>
//       </Modal.Header>
//       <Modal.Body>
//         <Form noValidate validated={validated} onSubmit={handleCreate} id="createForm">
//           <Form.Group controlId="formNewsTitle" className="m-2">
//             <Form.Label>Title</Form.Label>
//             <Form.Control
//               type="text"
//               placeholder="Enter title"
//               value={form.newsTitle}
//               onChange={(e) => setField('newsTitle', e.target.value)}
//               isInvalid={!!errors.newsTitle}
//             />
//             <Form.Control.Feedback type="invalid">{errors.newsTitle}</Form.Control.Feedback>
//           </Form.Group>

//           <Form.Group className="m-2">
//             <Form.Label>News Description</Form.Label>
//             <TextEditor
//               object="news"
//               description={form.newsDescription}
//               field="newsDescription"
//               setField={setField}
//             />
//           </Form.Group>

//           <Form.Group className="m-2">
//             <Form.Label>News Image</Form.Label>
//             <Form.Control
//               type="file"
//               accept="image/*"
//               onChange={(e) => setImageFile(e.target.files[0])}
//               isInvalid={!!errors.newsImageUrl}
//             />
//             <Form.Control.Feedback type="invalid">{errors.newsImageUrl}</Form.Control.Feedback>
//           </Form.Group>

//           <Form.Group controlId="formNewsCreateAt" className="m-2">
//             <Form.Label>Creation Date</Form.Label>
//             <Form.Control
//               type="date"
//               value={form.newsCreateAt}
//               onChange={(e) => setField('newsCreateAt', e.target.value)}
//               isInvalid={!!errors.newsCreateAt}
//             />
//             <Form.Control.Feedback type="invalid">{errors.newsCreateAt}</Form.Control.Feedback>
//           </Form.Group>

//           <Form.Group controlId="formNewsCategoryId" className="m-2">
//             <Form.Label>Category</Form.Label>
//             <Form.Select
//               required
//               name="newsCategoryId"
//               onChange={(e) => setField('newsCategoryId', e.target.value)}
//               className="bg-body text-dark border-secondary"
//               value={form.newsCategoryId}
//               isInvalid={!!errors.newsCategoryId}
//             >
//               <option value="">Select news category</option>
//               {state.newsCategories.map((newsCategory) => (
//                 <option key={newsCategory.newsCategoryId} value={newsCategory.newsCategoryId}>
//                   {newsCategory.newsCategoryName}
//                 </option>
//               ))}
//             </Form.Select>
//             <Form.Control.Feedback type="invalid">{errors.newsCategoryId}</Form.Control.Feedback>
//           </Form.Group>
//         </Form>
//       </Modal.Body>
//       <Modal.Footer>
//         <Button variant="secondary" onClick={closeCreateShow}>
//           Close
//         </Button>
//         <Button type="submit" variant="primary" form="createForm">
//           Save Changes
//         </Button>
//       </Modal.Footer>
//     </Modal>
//   );
// }

// export default CreateNewsModal;


import React, { useState, useEffect, useContext } from 'react';
import { Modal, Form, Button } from 'react-bootstrap';
import { NewsContext } from '../context/NewsContext';
import TextEditor from '../../common/TextEditor';
import uploadToS3 from '../../common/UploadToS3';

function CreateNewsModal({ show, fetchNews, onHide }) {
  const { state } = useContext(NewsContext);
  const [createShow, setCreateShow] = useState(false);

  useEffect(() => {
    setCreateShow(show);
  }, [show]);

  const [form, setForm] = useState({
    newsTitle: '',
    newsDescription: '',
    newsCreateAt: '', // This will hold the date in "YYYY-MM-DDT00:00:00" format
    newsImageUrl: '',
    newsCategoryId: '',
  });
  const [validated, setValidated] = useState(false);
  const [errors, setErrors] = useState({});
  const [imageFile, setImageFile] = useState(null);

  const setField = (field, value) => {
    setForm({
      ...form,
      [field]: value,
    });
  };

  const closeCreateShow = () => {
    onHide();
    setCreateShow(false);
    setForm({
      newsTitle: '',
      newsDescription: '',
      newsCreateAt: '',
      newsImageUrl: '',
      newsCategoryId: '',
    });
    setValidated(false);
    setErrors({});
    setImageFile(null);
  };

  const handleSetImageFile = (file) => {
    if (!file) {
      setErrors({ ...errors, newsImageUrl: 'Image is required' });
      return;
    } 
    if (!file.type.startsWith('image/')) {
      setErrors({ ...errors, newsImageUrl: 'Invalid image file' });
      console.log(imageFile)
      return;
    }
    if (file.size > 5 * 1024 * 1024) {
      setErrors({ ...errors, newsImageUrl: 'Image size should be less than 5MB' });
      return;
    }
    setImageFile(file);
    setErrors({ ...errors, newsImageUrl: '' });
  };

  // Form validation
  const validateForm = () => {
    const newErrors = {};
    if (!form.newsTitle) newErrors.newsTitle = 'Title is required';
    if (!form.newsDescription) newErrors.newsDescription = 'Description is required';
    if (!form.newsCreateAt) newErrors.newsCreateAt = 'Creation date is required';
    if (!imageFile) newErrors.newsImageUrl = 'Image is required';
    if (!form.newsCategoryId) newErrors.newsCategoryId = 'Category is required';
    return newErrors;
  };

  // Finalize the form before submission, upload the image to S3 and set creation date
  const finishForm = async () => {
    // Upload image to S3
    if (imageFile) {
      try {
        const imageUrl = await uploadToS3('news', imageFile);
        form.newsImageUrl = imageUrl;
        console.log("Image successfully uploaded:", imageUrl);
      } catch (error) {
        console.error('Error uploading image:', error);
        setErrors({ ...errors, newsImageUrl: 'Failed to upload image' });
        return false;
      }
    } else {
      console.error('Image file is missing!');
    }

    console.log("Form after image upload:", form);
    return true;
  };

  // Create news via API call
  const createNews = async () => {
    console.log("Submitting form to create news:", form);
    try {
      const response = await fetch('http://localhost:8080/news', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(form),
      });

      if (response.ok) {
        const data = await response.json();
        console.log("News successfully created:", data);
        await fetchNews(); // Re-fetch the news list
        closeCreateShow(); // Close the modal
      } else {
        console.error('Failed to create the news', response.statusText);
      }
    } catch (error) {
      console.error('Error creating news:', error);
    }
  };

  // Handle create form submission
  const handleCreate = async (e) => {
    e.preventDefault();
    setValidated(true);

    const newErrors = validateForm();
    if (Object.keys(newErrors).length > 0) {
      console.log("Validation errors:", newErrors);
      setErrors(newErrors);
      return;
    }

    const isReady = await finishForm();
    if (isReady) {
      await createNews(); // Call the create news function
    }
  };

  // Handle the date selection and format it to "YYYY-MM-DDT00:00:00"
  const handleDateChange = (e) => {
    const selectedDate = e.target.value; // This is the "YYYY-MM-DD" format from the date input
    const formattedDate = `${selectedDate}T00:00:00`; // Append "T00:00:00" to make it "YYYY-MM-DDT00:00:00"
    setField('newsCreateAt', formattedDate); // Set the formatted date in the form state
  };

  return (
    <Modal fullscreen={true} show={createShow} onHide={closeCreateShow}>
      <Modal.Header closeButton>
        <Modal.Title>Create News</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form noValidate validated={validated} onSubmit={handleCreate} id="createForm">
          <Form.Group controlId="formNewsTitle" className="m-2">
            <Form.Label>Title</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter title"
              value={form.newsTitle}
              onChange={(e) => setField('newsTitle', e.target.value)}
              isInvalid={!!errors.newsTitle}
            />
            <Form.Control.Feedback type="invalid">{errors.newsTitle}</Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="m-2">
            <Form.Label>News Description</Form.Label>
            <TextEditor
              object="news"
              description={form.newsDescription}
              field="newsDescription"
              setField={setField}
            />
          </Form.Group>

          <Form.Group className="m-2">
            <Form.Label>News Image</Form.Label>
            <Form.Control
              type="file"
              accept="image/*"
              onChange={(e) => handleSetImageFile(e.target.files[0])}
              isInvalid={!!errors.newsImageUrl}
            />
            <Form.Control.Feedback type="invalid">{errors.newsImageUrl}</Form.Control.Feedback>
          </Form.Group>

          <Form.Group controlId="formNewsCreateAt" className="m-2">
            <Form.Label>Creation Date</Form.Label>
            <Form.Control
              type="date"
              onChange={handleDateChange} // Handle date change to format as "YYYY-MM-DDT00:00:00"
              isInvalid={!!errors.newsCreateAt}
            />
            <Form.Control.Feedback type="invalid">{errors.newsCreateAt}</Form.Control.Feedback>
          </Form.Group>

          <Form.Group controlId="formNewsCategoryId" className="m-2">
            <Form.Label>Category</Form.Label>
            <Form.Select
              required
              name="newsCategoryId"
              onChange={(e) => setField('newsCategoryId', e.target.value)}
              className="bg-body text-dark border-secondary"
              value={form.newsCategoryId}
              isInvalid={!!errors.newsCategoryId}
            >
              <option value="">Select news category</option>
              {state.newsCategories.map((newsCategory) => (
                <option key={newsCategory.newsCategoryId} value={newsCategory.newsCategoryId}>
                  {newsCategory.newsCategoryName}
                </option>
              ))}
            </Form.Select>
            <Form.Control.Feedback type="invalid">{errors.newsCategoryId}</Form.Control.Feedback>
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={closeCreateShow}>
          Close
        </Button>
        <Button type="submit" variant="primary" form="createForm">
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default CreateNewsModal;
