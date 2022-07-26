import * as yup from 'yup'

export default yup.object().shape({
    title: yup.string()
    .required('enter title!'),
    image_url: yup.string()
    .required('enter url!'),
    review: yup.string()
    .required('enter review!'),
})