"use client"; 
import Hero from '../servicesDetails/Hero';
import FullProcessPath from '../servicesDetails/FullProcessPath';
import { useParams } from 'next/navigation';

export default function ServiceDetails() {
  const params = useParams();
  const serviceId = params.id as string;

  return (
    <main>
      <Hero id={serviceId} /> 
      <FullProcessPath />
    </main>
  );
}