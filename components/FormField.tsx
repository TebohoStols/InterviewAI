import React from 'react'
import {Input} from '@/components/ui/input'
import { Controller, FieldValues, Path, Control } from 'react-hook-form'
import { FormControl, FormDescription, FormItem, FormLabel, FormMessage } from './ui/form';

interface FormFieldProps<T extends FieldValues> {
    control: Control<T>;
    name: Path<T>;
    label: string,
    placeholder?: string,
    type?: 'text' | 'email' | 'passsword' | 'file'
    
}

const FormField = ({ control, name, label, placeholder, type='text'}: FormFieldProps<T>) => (
    <Controller 
        name={name} 
        control={control} 
        render={ ({ field }) => (
        <FormItem>
            <FormLabel className='label'>
                {label}
            </FormLabel>
                <FormControl>
                    <Input className='input' placeholder={placeholder} type={type} {...field} />
                </FormControl>
                <FormMessage />
        </FormItem>
        )}
    />
);

export default FormField
