programa
{
	funcao inicio()
	{
		real celsius, fahrenheit

		escreva("Digite a temperatura em Celsius: ")
		leia(celsius)

		
		fahrenheit = (celsius * 9.0 / 5.0) + 32.0

		escreva("\nA temperatura em Fahrenheit é: ", fahrenheit, "°F\n")

		se (fahrenheit > 68)
		{
			escreva("ALERTA: Super calor!\n")
		}
	}
}