/**
 * Task 11 - Brand Convention & Nominal Typing
 * ALX Frontend TypeScript
 */

// 1️⃣ Define MajorCredits interface
interface MajorCredits {
  credits: number;
  _brand: 'major';
}

// 2️⃣ Define MinorCredits interface
interface MinorCredits {
  credits: number;
  _brand: 'minor';
}

// 3️⃣ Function to sum major credits
function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): MajorCredits {
  return {
    credits: subject1.credits + subject2.credits,
    _brand: 'major',
  };
}

// 4️⃣ Function to sum minor credits
function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): MinorCredits {
  return {
    credits: subject1.credits + subject2.credits,
    _brand: 'minor',
  };
}

// 5️⃣ Example usage
const major1: MajorCredits = { credits: 3, _brand: 'major' };
const major2: MajorCredits = { credits: 4, _brand: 'major' };
const minor1: MinorCredits = { credits: 2, _brand: 'minor' };
const minor2: MinorCredits = { credits: 1, _brand: 'minor' };

const totalMajor = sumMajorCredits(major1, major2);
const totalMinor = sumMinorCredits(minor1, minor2);

console.log('Total Major Credits:', totalMajor);
console.log('Total Minor Credits:', totalMinor);
