'reach 0.1'

export const main = Reach.App(() => {
	const A = Participant('A', {
		call: Fun([], Null),
		deployed: Fun([Contract], Null),
	})
	const Call = API({
		call: Fun([], UInt),
	})
	init()
	A.publish()
	commit()
	A.publish()
	A.interact.deployed(getContract())

	const [count] = parallelReduce([0])
		.invariant(balance() == 0)
		.while(count < 20)
		.api(Call.call, (ret) => {
			ret(count)
			if (count != 19) A.interact.call()
			return [count + 1]
		})

	commit()
	exit()
})
