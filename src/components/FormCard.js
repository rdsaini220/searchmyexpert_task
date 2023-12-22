import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"


export const EmployieeSchema = yup.object({
    name: yup.string().required(),
    email: yup.string().required(),
    mobile: yup.string().required(),
    department: yup.string().required(),
    designation: yup.string().required(),
    date_of_joining: yup.string().required(),
    salary: yup.string().required(),
    status: yup.string(),
}).required()

const FormCard = ({ formData, handleSubmitForm}) => {
  const { name='', email='', mobile='', department='', designation='', date_of_joining, salary, status } = formData
  const { register, handleSubmit, formState: { errors }, } = useForm({
    resolver: yupResolver(EmployieeSchema),
  })
  const onSubmit = (data) => {
    if(formData?.id){
      handleSubmitForm({...data, id:formData?.id})
    }else{
      handleSubmitForm(data)
    }
  }
  return (    
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="row">
          <div className="col-lg-6 mb-3">
            <label htmlFor="name" className="form-label">Name</label>
            <input type="text" className="form-control" defaultValue={name}   {...register("name")} id="name" placeholder="Name"/>
            <span className="form-text text-danger">{errors.name?.message}</span>
          </div>
          <div className="col-lg-6 mb-3">
            <label htmlFor="email" className="form-label">Email</label>
            <input type="text" className="form-control" defaultValue={email}   {...register("email")} id="email" placeholder="Email"/>
            <span className="form-text text-danger">{errors.email?.message}</span>
          </div>
          <div className="col-lg-6 mb-3">
            <label htmlFor="mobile" className="form-label">Mobile</label>
            <input type="text" className="form-control" defaultValue={mobile}   {...register("mobile")} id="mobile" placeholder="Mobile"/>
            <span className="form-text text-danger">{errors.mobile?.message}</span>
          </div>
          <div className="col-lg-6 mb-3">
            <label htmlFor="department" className="form-label">Department</label>
            <input type="text" className="form-control" defaultValue={department}   {...register("department")} id="department" placeholder="Department"/>
            <span className="form-text text-danger">{errors.department?.message}</span>
          </div>
          <div className="col-lg-6 mb-3">
            <label htmlFor="designation" className="form-label">Designation</label>
            <input type="text" className="form-control" defaultValue={designation}   {...register("designation")} id="designation" placeholder="Designation"/>
            <span className="form-text text-danger">{errors.designation?.message}</span>
          </div>
          <div className="col-lg-6 mb-3">
            <label htmlFor="date_of_joining" className="form-label">Date Of Joining</label>
            <input type="date" className="form-control" defaultValue={date_of_joining}   {...register("date_of_joining")} id="date_of_joining" placeholder="Date Of Joining"/>
            <span className="form-text text-danger">{errors.date_of_joining?.message}</span>
          </div>
          <div className="col-lg-6 mb-3">
            <label htmlFor="salary" className="form-label">Salary</label>
            <input type="text" className="form-control" defaultValue={salary}   {...register("salary")} id="salary" placeholder="Salary"/>
            <span className="form-text text-danger">{errors.salary?.message}</span>
          </div>
          {
            formData?.id ?              
              <div className="col-lg-6 mb-3">
                <label htmlFor="status" className="form-label">Status</label>           
                <select
                  className="form-select"
                  {...register("status")}
                  id="status"
                  defaultValue={status}
                >
                  <option selected>Select Status</option>
                  <option value="active">active</option>
                  <option value="in_active">in_active</option>
                </select>
                <span className="form-text text-danger">{errors.status?.message}</span>
              </div>
            : <input type="text" hidden defaultValue={'active'} {...register("status")} id="status"/>
          }
      </div>
      <div className="row">
          <div className="col-lg-6 ms-auto mb-3 mt-3 d-flex justify-content-end">
            <button className="btn btn-primary w-50">Save</button>
          </div>
      </div>
    </form>
  )
}

export default FormCard