import {
  Form,
  FormError,
  FieldError,
  Label,
  TextField,
  Submit,
} from '@redwoodjs/forms'



const TodoForm = (props) => {
  const onSubmit = (data) => {

  
    
    
  
    
    
  
    props.onSave(data, props?.todo?.id)
  }

  return (
    <div className="rw-form-wrapper">
      <Form onSubmit={onSubmit} error={props.error}>
        <FormError
          error={props.error}
          wrapperClassName="rw-form-error-wrapper"
          titleClassName="rw-form-error-title"
          listClassName="rw-form-error-list"
        />
      
        <Label
          name="title"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Title
        </Label>
        
          <TextField
            name="title"
            defaultValue={props.todo?.title}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
            validation={{ required: true }}
          />
        

        <FieldError name="title" className="rw-field-error" />

        <Label
          name="type"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Type
        </Label>
        
          <TextField
            name="type"
            defaultValue={props.todo?.type}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
            validation={{ required: true }}
          />
        

        <FieldError name="type" className="rw-field-error" />

        <div className="rw-button-group">
          <Submit
            disabled={props.loading}
            className="rw-button rw-button-blue"
          >
            Save
          </Submit>
        </div>
      </Form>
    </div>
  )
}

export default TodoForm
