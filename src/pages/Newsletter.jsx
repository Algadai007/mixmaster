import axios from 'axios'
import { Form, redirect, useNavigation } from 'react-router-dom'
import { toast } from 'react-toastify'

// Action used in form submission, loader used when site is loaded. Request has formData() function to get values from form. Use Object.fromEntries(data from formData) to get key/value pairs

const newsletterUrl = 'https://www.course-api.com/cocktails-newsletter'

export const action = async ({ request }) => {
  const formData = await request.formData()
  const data = Object.fromEntries(formData)
  try {
    const response = await axios.post(newsletterUrl, data)
    toast.success(response.data.msg)
    return redirect('/')
  } catch (error) {
    console.log(error)
    toast.error(error?.response?.data?.msg)
    return error
  }
}

const Newsletter = () => {
  const navigation = useNavigation()
  const isSubmitting = navigation.state === 'submitting'
  return (
    <Form className='form' method='post'>
      <h4 style={{ textAlign: 'center', marginBottom: '2rem' }}>
        our newsletter
      </h4>
      {/* name */}
      <div className='form-row'>
        <label htmlFor='name' className='form-label'>
          name
        </label>
        <input
          type='text'
          className='form-input'
          name='name'
          id='name'
          required
        />
      </div>
      {/* lastName */}
      <div className='form-row'>
        <label htmlFor='lastName' className='form-label'>
          last name
        </label>
        <input
          type='text'
          className='form-input'
          name='lastName'
          id='lastName'
          required
        />
      </div>
      {/* email */}
      <div className='form-row'>
        <label htmlFor='email' className='form-label'>
          email
        </label>
        <input
          required
          type='email'
          className='form-input'
          name='email'
          id='email'
          defaultValue='test@test.com'
        />
      </div>
      <button
        type='submit'
        className='btn btn-block'
        style={{ marginTop: '0.5rem' }}
        disabled={isSubmitting}
      >
        {isSubmitting ? 'submitting' : 'submit'}
      </button>
    </Form>
  )
}

export default Newsletter