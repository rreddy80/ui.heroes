import { Pipe, PipeTransform } from '@angular/core';
/*
 * Convert date as MomentAgo such as '1 second ago, 1 minute ago, 1 day ago, 1 year ago...'
 * 
 * Usage:
 *     Date-value | momentAgo
 * Example:
 *     {{ 2016-09-17T07:28:08.354Z | momentAgo }}
 *     formats to something like: 10 days ago  (if today's date is 2016-09-27)
 */
@Pipe({	name: 'momentAgo' })
export class MomentAgoPipe implements PipeTransform {

	transform(value: Date): string {

		const oneSecond = 1000;           // 1 sec = 1000 milliseconds
		const oneMinute = 60 * oneSecond; // 1 min = 60 * 1000 milliseconds
		const oneHour   = 60 * oneMinute; // 1 hr = 60 * 60 * 1000 milliseconds
		const oneDay    = 24 * oneHour;   // 1 day = 24 * 60 * 60 * 1000 milliseconds
		var diff = Date.now() - new Date(value).getTime();

		if (diff > oneDay) 
			return this.stringify(diff, oneDay, 'd');
		if (diff > oneHour)
			return this.stringify(diff, oneHour, 'h');
		if (diff > oneMinute)
			return this.stringify(diff, oneMinute, 'm');
		return this.stringify(diff, oneSecond, 's');

	}

	private stringify(timeDiff: number, divisor: number, unit: string) {
		var time = Math.floor(timeDiff/divisor);
		return time + unit + ' ago';
	}
}