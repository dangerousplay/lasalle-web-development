'use client'

import {PropsWithChildren, useState} from "react";
import { w } from "windstitch";
import {useField, Form, Formik} from "formik";
import * as Yup from 'yup';
import React from 'react';


type Props = PropsWithChildren<{}>;

const Base = w.div(`
  p-6 text-14 text-justify
`);

const Description = w.section(``);

type TextInputProps = {
    label: string
    id?: string
    name: string
    placeholder?: string
    pattern?: string
    type?: string
    onChange?: (e: any) => void
}

const TextInput = ({ label, ...props }: TextInputProps) => {
    // useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
    // which we can spread on <input>. We can use field meta to show an error
    // message if the field is invalid and it has been touched (i.e. visited)
    const [field, meta] = useField(props);
    return (
        <div className={'flex flex-col space-y-3'}>
            <label htmlFor={props.id || props.name}>{label}</label>
            <input className="invalid:border-red-1 dark:bg-gray-3 dark:hover:bg-gray-5 text-14 p-1" {...field} {...props} />
            {meta.touched && meta.error ? (
                <div className="text-red-10 font-bold">{meta.error}</div>
            ) : null}
        </div>
    );
};

const NumberInput = ({ ...props }: TextInputProps) => {
    return (
        <TextInput { ...props} type="number" />
    )
};


type DateInputProps = TextInputProps & {
    showDateComponent?: (e: string) => React.ReactElement
    showDate?: boolean
}

const DateInput = ({
  showDate = false,
  showDateComponent = (_) => <></>,
  ...props }: DateInputProps) => {
    const [value, setValue] = useState()
    return (
        <div>
            <TextInput {...props} onChange={(e) => setValue(e.target.value)} type="date" />
            { showDate ? value ? showDateComponent(value) : <></> : <></>}
        </div>
    )
};

type CheckboxProps = {
    label: string
    id?: string
    name: string
    enabled?: boolean
}

const Checkbox = ({ label, ...props }: CheckboxProps) => {
    // React treats radios and checkbox inputs differently from other input types: select and textarea.
    // Formik does this too! When you specify `type` to useField(), it will
    // return the correct bag of props for you -- a `checked` prop will be included
    // in `field` alongside `name`, `value`, `onChange`, and `onBlur`
    const [field, meta] = useField({ ...props, type: 'checkbox' });
    return (
        <div className="gap-3 flex flex-row" >
            <input type="checkbox" {...field} {...props} />
            <label htmlFor={props.id || props.name}>{label.split('\n').map(t => <p key={t}>{t}</p>)}</label>
            {meta.touched && meta.error ? (
                <div className="text-red-10 font-bold">{meta.error}</div>
            ) : null}
        </div>
    );
};


type SelectProps = PropsWithChildren<{
    label: string
    id?: string
    name: string
}>

const Select = ({ label, ...props }: SelectProps) => {
    const [field, meta] = useField(props);
    return (
        <div className={'gap-3 flex flex-col'}>
            <label htmlFor={props.id || props.name}>{label}</label>
            <select className={'dark:bg-gray-3 dark:hover:bg-gray-5 text-14 p-1'} {...field} {...props} />
            {meta.touched && meta.error ? (
                <div className="text-red-10 font-bold">{meta.error}</div>
            ) : null}
        </div>
    );
};

type TextAreaProps = {
    label: string
    id?: string
    name: string
    className?: string
    cols: number
    rows: number
}

const TextArea = ({ label, className = '', ...props }: TextAreaProps) => {
    // useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
    // which we can spread on <input>. We can use field meta to show an error
    // message if the field is invalid and it has been touched (i.e. visited)
    const [field, meta] = useField(props);
    return (
        <div className={`space-y-6 flex flex-col ${className}`}>
            <label htmlFor={props.id || props.name}>{label}</label>
            <textarea {...field} {...props}/>
            {meta.touched && meta.error ? (
                <div className="text-red-10 font-bold">{meta.error}</div>
            ) : null}
        </div>
    );
};

type RadioGroupProps = {
    id?: string
    name: string
    options: { [k: string]: string }
    legend: string
    className?: string
}

const RadioGroup = ({ options, legend, ...props }: RadioGroupProps) => {
    const [field, meta] = useField({ ...props, type: 'radio' });
    return (
        <fieldset className={'pt-3'}>
            <legend>{legend}</legend>
            {Object.keys(options).map((o: string) => {
                const id = `sex_${o}`
                return (
                    <div className="space-x-2" key={o}>
                        <input type="radio" {...props} value={o} id={id}/>
                        <label className="checkbox-input" htmlFor={id}>
                            {options[o]}
                        </label>
                    </div>
                )
            })}

            {meta.touched && meta.error ? (
                <div className="error">{meta.error}</div>
            ) : null}
        </fieldset>
    );
};



const bloodTypes = ['A', 'B', 'AB', 'O']
const bloodRhTypes = ['+', '-']

const sexTypes = {
    m: 'Masculino',
    f: 'Feminino'
}

const calculateAge = (dateOfBirth: string) => {
    const dob = new Date(dateOfBirth);
    const today = new Date();

    let age = today.getFullYear() - dob.getFullYear();
    let month = today.getMonth() - dob.getMonth();

    if (month < 0 || (month === 0 && today.getDate() < dob.getDate())) {
        age--;
    }

    if (age < 0 )
        age = 0

    return age;
}

export default function RegisterLayout(props: Props) {
  const { children } = props;

  // language=JSRegexp
    return (
    <>
      <Base>
        <Description>
            <h1 className="text-4xl font-bold">Dados de Informações do Doador</h1>
            <p className="mt-4">
            </p>
        </Description>
          <Formik
              initialValues={{
                  name: '',
                  username: '',
                  password: '',
                  email: '',
                  cellphone: '',
                  weight: 0,
                  bloodType: '',
                  bloodRhType: '',
                  sex: '',
                  agreeTerms: false,
              }}
              validationSchema={Yup.object({
                  name: Yup.string()
                      .max(15, 'Must be 15 characters or less')
                      .min(3)
                      .required('Required'),
                  username: Yup.string()
                      .max(15, 'Must be 3 characters or less')
                      .min(3)
                      .required('Required'),
                  password: Yup.string()
                      .max(3, 'Must be 3 characters or less')
                      .min(3)
                      .required('Required'),
                  email: Yup.string()
                      .email('Invalid email address')
                      .required('Required'),
                  cellphone: Yup.string()
                      .matches(/[0-9]{2}-[0-9]{8}/, 'Must be in format 51-99999999')
                      .required('Required'),
                  weight: Yup.number()
                      .positive()
                      .max(250),
                  bloodType: Yup.string()
                      .oneOf(
                          bloodTypes,
                          'Invalid blood type'
                      )
                      .required('Required'),
                  bloodRhType: Yup.string()
                      .oneOf(
                          bloodRhTypes,
                          'Invalid blood rh type'
                      )
                      .required('Required'),
                  sex: Yup.string()
                      .oneOf(Object.keys(sexTypes))
                      .required('Required'),
                  agreeTerms: Yup.bool()
                      .isTrue('You should accept the terms')
                      .required('Required'),
                  birthDate: Yup.date().required('Required')
              })}
              onSubmit={(values, { setSubmitting }) => {
                  setTimeout(() => {
                      alert(JSON.stringify(values, null, 2));
                      setSubmitting(false);
                  }, 400);
              }}
          >
              <Form className="gap-3 grid sm:grid-cols-1 md:grid-cols-2">
                  <TextInput
                      label="Nome"
                      name="name"
                      type="text"
                      placeholder="Joao da Silva"
                  />

                  <TextInput
                      label="Username"
                      name="username"
                      type="text"
                      placeholder="joao_silva"
                  />

                  <TextInput
                      label="Email"
                      name="email"
                      type="email"
                      placeholder="user@email.com"
                  />

                  <TextInput
                      label="Telefone"
                      name="cellphone"
                      type="tel"
                      pattern="[0-9]{2}-[0-9]{8}"
                      placeholder="51-99999999"
                  />

                  <DateInput label="Data de nascimento"
                             name="birthDate"
                             placeholder="01/01/2000"
                             showDate={true}
                             showDateComponent={(d) => {
                                 const age = calculateAge(d);

                                 return (<p>Idade: {age} anos</p>);
                             }
                  } />

                  <NumberInput label="Peso KG" name="weight" placeholder="70"/>

                  <Select label="Tipo sanguíneo" name="bloodType">
                      {bloodTypes.map((t) => <option key={t}>{t}</option>)}
                  </Select>

                  <Select label="Fator RH" name="bloodRhType">
                      {bloodRhTypes.map((t) => <option key={t}>{t}</option>)}
                  </Select>

                  <RadioGroup options={sexTypes} legend={'Sexo'} name="sex" />

                  <TextInput
                      label="Número do documento"
                      name="id"
                      type="text"
                      placeholder="999.999.785-45"
                  />

                  <fieldset className="space-y-3 col-span-2">
                      <legend>Informações adicionais</legend>
                      <Checkbox label={
                          "Estar descansado (ter dormido pelo menos 6 horas nas últimas 24 horas)\n" +
                          "Estar alimentado, evitando alimentos gordurosos\n" +
                          "Não tem com anemia no teste realizado imediatamente antes da doação\n" +
                          "Não tem com hipertensão ou hipotensão arterial no momento da doação\n" +
                          "Não está com aumento ou diminuição dos batimentos cardíacos no momento da doação\n" +
                          "Não está com febre no dia da doação"
                      } name='agreeTerms' />
                  </fieldset>

                  <TextArea name='comment' label='Observações' className='col-span-2 w-full max-w-full' cols={40} rows={15} />

                  <button type="submit" className={'col-span-2 h-8 shadow-2xl bg-gray-1 hover:bg-gray-3'}>Enviar</button>
              </Form>
          </Formik>

        {children}
      </Base>
    </>
  );
}
