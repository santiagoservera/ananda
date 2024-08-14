import React from "react";
import { useForm } from "react-hook-form";
import { Input, Button, Textarea } from "@nextui-org/react";

const Contacto = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    // Aquí puedes manejar el envío del formulario
  };

  return (
    <div className="w-[95%] mx-auto my-16">
      <div className="w-full flex lg:flex-row flex-col-reverse gap-10 justify-between items-center  h-auto p-10">
        <div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3400.5025236396823!2d-68.52759252482294!3d-31.53782067420602!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9681402800dc0a7f%3A0x3b01b237fddb200f!2sB.%20Mitre%2051%2C%20J5402%20CWA%2C%20San%20Juan!5e0!3m2!1ses!2sar!4v1723218997166!5m2!1ses!2sar"
            className="rounded-lg lg:h-[420px] lg:w-[600px] h-[400px] w-[300px]"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div className="w-full h-full flex flex-col gap-5 items-start p-5 background-gradiente rounded-lg shadow-lg">
          <div className="flex justify-center w-full text-center">
            <p className="text-4xl font-bold text-gradiente-2 text-center">
              Ponte en contacto con nosotros
            </p>
          </div>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="w-full flex flex-col gap-5"
          >
            <div className="flex justify-between items-center gap-5">
              <div className="w-full">
                <Input
                  color="success"
                  type="text"
                  label="Nombre"
                  {...register("nombre", { required: true })}
                  status={errors.nombre ? "error" : "default"}
                />
                {errors.nombre && (
                  <p className="text-red-400 font-semibold">
                    Nombre es requerido
                  </p>
                )}
              </div>
              <div className="w-full">
                <Input
                  color="success"
                  type="text"
                  label="Apellido"
                  {...register("apellido", { required: true })}
                  status={errors.apellido ? "error" : "default"}
                />
                {errors.apellido && (
                  <p className="text-red-400 font-semibold">
                    Apellido es requerido
                  </p>
                )}
              </div>
            </div>
            <div className="flex justify-between items-center gap-5">
              <div className="w-full">
                <Input
                  color="success"
                  type="email"
                  label="Email"
                  {...register("email", { required: true })}
                  status={errors.email ? "error" : "default"}
                />
                {errors.email && (
                  <p className="text-red-400 font-semibold">
                    Email es requerido
                  </p>
                )}
              </div>
              <div className="w-full">
                <Input
                  color="success"
                  type="text"
                  label="Asunto"
                  {...register("asunto", { required: true })}
                  status={errors.asunto ? "error" : "default"}
                />
                {errors.asunto && (
                  <p className="text-red-400 font-semibold">
                    Asunto es requerido
                  </p>
                )}
              </div>
            </div>
            <div>
              <Textarea
                color="success"
                label="Mensaje"
                {...register("mensaje", { required: true })}
                status={errors.mensaje ? "error" : "default"}
                rows={6}
              />
              {errors.mensaje && (
                <p className="text-red-400 font-semibold">
                  Mensaje es requerido
                </p>
              )}
            </div>
            <Button
              type="submit"
              className="background-gradiente border font-semibold border-gray-400 py-2 rounded-full w-1/2 mx-auto text-white transition-transform transform hover:scale-105"
            >
              ENVIAR
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contacto;
